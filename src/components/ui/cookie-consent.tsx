"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { CookieIcon, ChevronRight, ShieldCheck, BarChart3, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

// --------------------------------
// Types and Interfaces
// --------------------------------

interface CookieCategory {
  id: string;
  name: string;
  description: string;
  icon?: React.ReactNode;
  isEssential?: boolean;
}

interface CookiePreferences {
  [key: string]: boolean;
}

// --------------------------------
// Default Configurations
// --------------------------------

const DEFAULT_COOKIE_CATEGORIES: CookieCategory[] = [
  {
    id: "essential",
    name: "Необходимые куки",
    description: "Требуется для обеспечения основных функций сайта, безопасности и базовых операций. Отключить их невозможно.",
    isEssential: true,
    icon: <ShieldCheck className="h-4 w-4 text-violet-500" />,
  },
  {
    id: "analytics",
    name: "Аналитические куки",
    description: "Помогают нам понять, как посетители взаимодействуют с нашим сайтом, собирая анонимные данные об использовании.",
    icon: <BarChart3 className="h-4 w-4 text-violet-500" />,
  },
  {
    id: "marketing",
    name: "Маркетинговые куки",
    description: "Включают персонализированную рекламу на сайтах.",
    icon: <Target className="h-4 w-4 text-violet-500" />,
  },
];

const STORAGE_KEY = "cookie_preferences";
const CONSENT_KEY = "cookie_consent_given";
const STORAGE_MAP_KEY = "cookie_preferences_map";

// --------------------------------
// Main Component
// --------------------------------

interface CookieConsentProps {
  className?: string;
  categories?: CookieCategory[];
  cookiePolicyUrl?: string;
  onAccept?: (preferences: boolean[]) => void;
  onDecline?: () => void;
  showCustomizeDialog?: boolean;
  onCustomizeDialogChange?: (show: boolean) => void;
}

function CookieConsent({
  className,
  categories = DEFAULT_COOKIE_CATEGORIES,
  cookiePolicyUrl = "/privacy",
  onAccept,
  onDecline,
  showCustomizeDialog: externalShowCustomizeDialog,
  onCustomizeDialogChange,
}: CookieConsentProps) {
  const [mounted, setMounted] = React.useState(false);
  const [showBanner, setShowBanner] = React.useState(false);
  const [internalShowCustomizeDialog, setInternalShowCustomizeDialog] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  
  // Используем внешнее состояние если оно передано, иначе внутреннее
  const showCustomizeDialog = externalShowCustomizeDialog !== undefined ? externalShowCustomizeDialog : internalShowCustomizeDialog;
  const setShowCustomizeDialog = onCustomizeDialogChange || setInternalShowCustomizeDialog;
  
  // Simple boolean array - index matches category index
  const [preferences, setPreferences] = React.useState<boolean[]>(() => 
    categories.map(cat => !!cat.isEssential)
  );
  const [savedPreferences, setSavedPreferences] = React.useState<boolean[]>(() => 
    categories.map(cat => !!cat.isEssential)
  );
  const [hasConsent, setHasConsent] = React.useState<boolean>(false);

  // Check if consent was already given
  React.useEffect(() => {
    setMounted(true);
    // detect mobile
    const detect = () => setIsMobile(typeof window !== 'undefined' && window.innerWidth < 640);
    detect();
    window.addEventListener('resize', detect);

    // Restore saved preferences if present
    try {
      const raw = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
      const consent = typeof window !== 'undefined' ? localStorage.getItem(CONSENT_KEY) : null;
      if (raw) {
        const parsed = JSON.parse(raw) as boolean[];
        if (Array.isArray(parsed) && parsed.length === categories.length) {
          setSavedPreferences(parsed);
          setPreferences(parsed);
        }
      }
      // Show banner only if нет сохранённого согласия
      const consentGiven = consent === "true";
      setHasConsent(consentGiven);
      setShowBanner(!consentGiven);
    } catch {}
    
    return () => window.removeEventListener('resize', detect);
  }, [categories.length, onAccept]);

  // Hide banner on mobile while customize dialog is open, show back when closed (until accepted)
  React.useEffect(() => {
    if (!mounted) return;
    if (isMobile) {
      setShowBanner(!showCustomizeDialog && !hasConsent);
    }
  }, [isMobile, showCustomizeDialog, mounted, hasConsent]);

  // Open settings dialog on global request
  React.useEffect(() => {
    const openHandler = () => setShowCustomizeDialog(true);
    window.addEventListener('open-cookie-settings', openHandler as EventListener);
    return () => window.removeEventListener('open-cookie-settings', openHandler as EventListener);
  }, [setShowCustomizeDialog]);

  const savePreferences = React.useCallback((prefs: boolean[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
      localStorage.setItem(CONSENT_KEY, "true");
      setHasConsent(true);
      // Build an id->boolean map for easier consumption by other modules
      const map: Record<string, boolean> = {};
      categories.forEach((cat, idx) => { map[cat.id] = !!prefs[idx]; });
      localStorage.setItem(STORAGE_MAP_KEY, JSON.stringify(map));
      // Broadcast change event
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('cookie-preferences-changed', { detail: map }));
      }
    } catch (error) {
      console.error("Error saving cookie preferences:", error);
    }
    
    setShowBanner(false);
    setShowCustomizeDialog(false);
    onAccept?.(prefs);
  }, [onAccept, categories]);

  const handleAcceptAll = React.useCallback(() => {
    const allTrue = categories.map(() => true);
    setPreferences(allTrue);
    setSavedPreferences(allTrue);
    savePreferences(allTrue);
  }, [categories, savePreferences]);

  const handleRejectAll = React.useCallback(() => {
    const essentialOnly = categories.map(cat => !!cat.isEssential);
    setPreferences(essentialOnly);
    setSavedPreferences(essentialOnly);
    savePreferences(essentialOnly);
    onDecline?.();
  }, [categories, savePreferences, onDecline]);

  const handleSaveCustom = React.useCallback(() => {
    setSavedPreferences(preferences);
    savePreferences(preferences);
  }, [preferences, savePreferences]);

  const handleToggle = React.useCallback((index: number, checked: boolean) => {
    if (categories[index]?.isEssential) return; // Can't toggle essential cookies
    
    setPreferences(prev => {
      const newPrefs = [...prev];
      newPrefs[index] = checked;
      return newPrefs;
    });
  }, [categories]);

  if (!mounted) return null;

  return (
    <>
      <CookieBanner
        isVisible={!hasConsent && showBanner && !(isMobile && showCustomizeDialog)}
        onAcceptAll={handleAcceptAll}
        onCustomize={() => setShowCustomizeDialog(true)}
        cookiePolicyUrl={cookiePolicyUrl}
        className={className}
        blurred={!isMobile && showCustomizeDialog}
      />
      
      <CookieCustomizeDialog
        open={showCustomizeDialog}
        onOpenChange={(open) => {
          if (open) {
            // При открытии всегда сбрасываем рабочие значения к сохранённым
            setPreferences(savedPreferences);
          } else {
            // При закрытии без сохранения откатываем изменения
            setPreferences(savedPreferences);
          }
          setShowCustomizeDialog(open);
        }}
        categories={categories}
        preferences={preferences}
        onToggle={handleToggle}
        onSave={handleSaveCustom}
        onRejectAll={handleRejectAll}
      />
    </>
  );
}

// --------------------------------
// Sub-Components
// --------------------------------

interface CookieBannerProps {
  isVisible: boolean;
  onAcceptAll: () => void;
  onCustomize: () => void;
  cookiePolicyUrl: string;
  className?: string;
  blurred?: boolean;
}

function CookieBanner({
  isVisible,
  onAcceptAll,
  onCustomize,
  cookiePolicyUrl,
  className,
  blurred,
}: CookieBannerProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={cn(
            "fixed bottom-0 left-0 right-0 sm:left-4 sm:bottom-4 z-[99999] w-full sm:max-w-md",
            className
          )}
        >
          <div className={cn(
            "m-3 bg-card/95 backdrop-blur-lg border border-[#e5e5e5] rounded-xl shadow-2xl font-montserrat transition-all",
            blurred ? "blur-sm opacity-70 pointer-events-none" : ""
          )}>
            <div className="flex items-center gap-3 p-6 pb-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <CookieIcon className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-lg font-semibold text-black">Настройки куки</h2>
            </div>
            <div className="px-6 pb-4">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Мы используем куки для улучшения вашего опыта, персонализации контента и анализа трафика.
              </p>
              <Link
                href="/privacy"
                className="text-xs inline-flex items-center text-primary hover:underline group font-medium transition-colors"
              >
                Политика конфиденциальности
                <ChevronRight className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
            <div className="p-4 flex flex-col sm:flex-row gap-3 border-t border-[#e5e5e5] bg-muted/30">
              <Button
                onClick={onAcceptAll}
                size="sm"
                className="w-full sm:flex-1 h-9 rounded-lg text-sm transition-all hover:shadow-md bg-black text-white hover:bg-neutral-900"
              >
                Принять все
              </Button>
              <Button
                onClick={onCustomize}
                size="sm"
                variant="outline"
                className="w-full sm:flex-1 h-9 rounded-lg text-sm transition-all hover:shadow-md text-black border-[#e5e5e5] !border-[#e5e5e5] bg-white hover:bg-[#efefef]"
              >
                Настроить
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface CookieCustomizeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  categories: CookieCategory[];
  preferences: boolean[];
  onToggle: (index: number, checked: boolean) => void;
  onSave: () => void;
  onRejectAll: () => void;
}

function CookieCustomizeDialog({
  open,
  onOpenChange,
  categories,
  preferences,
  onToggle,
  onSave,
  onRejectAll,
}: CookieCustomizeDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white/95 backdrop-blur-lg z-[9999] sm:max-w-[560px] p-0 gap-0 border border-[#e5e5e5] shadow-2xl font-montserrat left-0 right-0 bottom-0 top-auto translate-x-0 translate-y-0 w-auto mx-3 mb-3 rounded-2xl sm:rounded-2xl sm:left-1/2 sm:top-1/2 sm:translate-x-[-50%] sm:translate-y-[-50%] sm:mx-0 sm:mb-0 flex flex-col max-h-[90vh]">
        <DialogHeader className="p-6 pb-4 border-b border-[#e5e5e5] !border-b-[#e5e5e5]">
          <DialogTitle className="text-xl font-semibold">Управление куки</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            <span className="block sm:hidden">Настройте Ваши предпочтения<br />по файлам cookies ниже.</span>
            <span className="hidden sm:block">Настройте Ваши предпочтения по файлам cookies ниже.</span>
          </DialogDescription>
        </DialogHeader>
        <div className="px-6 py-6 space-y-5 flex-1 overflow-y-auto max-h-[calc(100vh-180px)] sm:max-h-[60vh]">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              className={cn(
                "p-5 border rounded-2xl bg-white transition-all duration-200",
                preferences[index] 
                  ? "border-[#e5e5e5] shadow-sm" 
                  : "border-[#e5e5e5] hover:border-[#dcdcdc]"
              )}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "p-2.5 rounded-lg transition-colors",
                    preferences[index] ? "bg-primary/10" : "bg-muted"
                  )}>
                    {category.icon || <CookieIcon className="h-5 w-5" />}
                  </div>
                  <Label
                    htmlFor={`cookie-${index}`}
                    className="font-semibold text-base cursor-pointer"
                  >
                    {category.name}
                    {category.isEssential && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                              Обязательно
                            </span>
                          </TooltipTrigger>
                          <TooltipContent className="bg-white text-gray-900 border-0 shadow-lg">
                            <p className="text-xs">Эти куки нельзя отключить</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                  </Label>
                </div>
                <Switch
                  id={`cookie-${index}`}
                  checked={preferences[index] || false}
                  onCheckedChange={(checked) => onToggle(index, checked)}
                  disabled={category.isEssential}
                  className="border-0 !border-0 data-[state=checked]:bg-black data-[state=unchecked]:bg-gray-300 [&>span]:bg-white h-6 w-11"
                />
              </div>
              <p className="text-sm mt-3 text-muted-foreground leading-relaxed">
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>
        <DialogFooter className="p-6 border-t border-[#e5e5e5] bg-muted/30">
          <div className="flex w-full flex-col-reverse sm:flex-row sm:justify-end gap-3">
                          <Button 
                variant="outline" 
                onClick={onRejectAll} 
                className="min-w-[180px] h-10 transition-all hover:shadow-md border-[#e5e5e5] text-black bg-white hover:bg-[#efefef]"
              >
              Отклонить все
            </Button>
            <Button 
              onClick={onSave} 
              className="min-w-[200px] h-10 transition-all hover:shadow-md bg-black text-white hover:bg-neutral-900"
            >
              Сохранить настройки
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// --------------------------------
// Exports
// --------------------------------

export { CookieConsent };
export type { CookieCategory, CookieConsentProps, CookiePreferences };