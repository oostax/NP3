import { BGPattern } from "@/components/bg-pattern";
import { OpenCookieSettingsLink } from "@/components/ui/open-cookie-settings-link";
import { TooltipLink } from "@/components/ui/tooltip-link";
import { PageReveal } from "@/components/ui/page-reveal";
import { ShieldCheck, BarChart3, FileText, Users, Lock, Clock, Cookie } from "lucide-react";

export const metadata = {
  title: "Политика конфиденциальности | Dr. Kery Lady",
  description: "Политика конфиденциальности сайта Dr. Kery Lady",
};

export const revalidate = 3600;

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full relative">
      <div className="absolute inset-0 w-full h-full z-0">
        <BGPattern 
          variant="dots" 
          mask="fade-center" 
          size={25} 
          fill="#6b7280" 
          className="opacity-60 w-full h-full"
        />
      </div>
      <PageReveal className="relative z-10 max-w-4xl mx-auto px-4 py-10 font-montserrat text-gray-900">
        <h1 
          className="text-3xl sm:text-4xl md:text-6xl font-bold leading-none tracking-tighter font-montserrat mb-2 text-[#101828]"
        >
          Политика {" "}
          <span className="bg-gradient-to-r from-[#bf3ff1] via-[#db83fc] to-[#db83fc] bg-clip-text text-transparent font-semibold">
            конфиденциальности
          </span>
        </h1>
        <div className="flex items-center gap-2 text-sm text-gray-600 mt-4 leading-tight">
          <FileText className="h-4 w-4 text-gray-700" />
          <span>Версия: 1.0 (полная редакция)</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1 mb-8 leading-tight">
          <Clock className="h-4 w-4 text-gray-700" />
          <span>Дата вступления в силу: 17.09.2025</span>
        </div>
        <div className="w-full h-px bg-gray-200 mb-8"></div>

        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-semibold">1. Общие положения</h2>
          <p>1.1. Настоящая Политика конфиденциальности (далее — «Политика») регулирует порядок сбора и обработки персональных данных посетителей веб-сайта, принадлежащего Дрожжиной Карине Тагировне (бренд Dr. Kery Lady) (далее — «Оператор»).</p>
          <p>1.2. Сайт является визиткой и не содержит форм регистрации, записи, комментариев, форм оплаты, механизмов ввода персональных данных через веб-интерфейс или иных способов передачи персональных данных напрямую.</p>
          <p>1.3. Политика применяется ко всем страницам сайта и ко всем операциям, выполняемым Оператором в связи с функционированием сайта.</p>
          <p>
            1.4. Единственными источниками данных на сайте являются{" "}
            <a href="/cookies" className="inline-block underline decoration-[#bf3ff1] decoration-1 underline-offset-2 group">
              <span className="bg-gradient-to-r from-[#bf3ff1] via-[#db83fc] to-[#db83fc] group-hover:from-[#9a13d2] group-hover:via-[#7a2fb0] group-hover:to-[#6a288a] bg-clip-text text-transparent font-semibold transition-colors duration-300 ease-out group-hover:opacity-90">cookies-файлы</span>
            </a>
            {" "}и серверные логи.
          </p>
        </section>

        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">2. Сбор данных</h2>
          <h3 className="text-xl font-semibold mt-4">2.1 Cookies</h3>
          <p className="text-gray-700 mt-2">
            <span className="font-semibold">Cookies (куки)</span> — это небольшие текстовые файлы, которые веб‑сайт сохраняет на устройстве пользователя при его посещении. Они позволяют сайту распознавать браузер при последующих визитах, запоминать выбранные настройки и обеспечивать корректную работу сервисов.
          </p>
          <p className="text-gray-700">
            Cookies не являются программами и не могут использоваться для запуска кода или передачи вирусов. Они содержат только текстовую информацию (например, уникальный идентификатор, дату и время, технические параметры браузера).
          </p>
          <h4 className="text-lg font-semibold mt-3">2.1.1 Категории используемых cookie</h4>
          <p className="text-gray-700">
            <span className="font-semibold">Необходимые (технические) cookies</span> — обеспечивают базовую работу сайта: навигацию, корректное отображение страниц, безопасность сессии и прочие критически важные функции. Применяются автоматически и не требуют предварительного согласия пользователя.
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Аналитические cookies</span> — собирают обезличенные данные о поведении посетителей (просмотры страниц, время на странице, пути переходов, события) и используются для статистики и улучшения качества контента и функционала сайта. Активируются только при наличии явного согласия пользователя.
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Маркетинговые / рекламные cookies</span> — предназначены для персонализированной рекламы, измерения эффективности рекламных кампаний и ретаргетинга. В настоящий момент на сайте такие теги не используются; при их добавлении они будут активироваться только после получения явного согласия пользователя.
          </p>
          

          <h4 className="text-lg font-semibold mt-6">2.1.2 Получение согласия</h4>
          <div className="space-y-3 text-gray-700">
            <p>
              Перед активацией аналитических и маркетинговых cookie при первом посещении сайта пользователю принудительно показывается нескрываемый баннер/модальное окно с выбором: «Принять всё» и «Настроить». При переходе в окно «Настроить» доступны переключатели по категориям и кнопка «Отклонить все» — при её выборе активными остаются только необходимые cookies.
            </p>
            <p>
              Выбор пользователя сохраняется локально на его устройстве в настройках сайта (в localStorage) под ключами:
              {" "}
              <span className="inline-block px-1 py-0.5 rounded border border-purple-400 bg-purple-50 text-purple-700 font-mono">cookie_preferences</span>,
              {" "}
              <span className="inline-block px-1 py-0.5 rounded border border-purple-400 bg-purple-50 text-purple-700 font-mono">cookie_preferences_map</span>,
              {" "}
              <span className="inline-block px-1 py-0.5 rounded border border-purple-400 bg-purple-50 text-purple-700 font-mono">cookie_consent_given</span>
              {" "}и используется для определения разрешения загрузки используемых категорий cookies. Сохранённые настройки действуют до тех пор, пока пользователь не очистит данные сайта в браузере или не изменит свой выбор в разделе «
              <OpenCookieSettingsLink />
              ».
            </p>
            <p>
              Аналитические и маркетинговые cookies активируются только после фиксации соответствующего согласия в localStorage. До момента явного согласия они не выполняются.
            </p>
          </div>

          <h4 className="text-lg font-semibold mt-6">2.1.3 Отзыв и изменение согласия</h4>
          <p className="text-gray-700 mb-2">Пользователь в любой момент может изменить или отозвать ранее данное согласие следующими способами:</p>
          <ul className="list-none pl-0 space-y-2 text-gray-700">
            <li className="pl-0 before:content-['-'] before:mr-2">через интерфейс «Настройки cookies» на сайте (ссылка доступна в футере или в баннере при первой загрузке);</li>
            <li className="pl-0 before:content-['-'] before:mr-2">удалив сохранённые настройки через функции браузера (очистка данных).</li>
          </ul>
          <p className="text-gray-700">
            После отзыва согласия аналитические и маркетинговые cookies больше не устанавливаются, а ранее активированные аналитические скрипты автоматически прекращают работу при следующей загрузке страницы.
          </p>

          <h4 className="text-lg font-semibold mt-6">2.1.4 Принципы работы аналитики (Яндекс.Метрика)</h4>
          <div className="space-y-3 text-gray-700">
            <p>
              На сайте используется{" "}
              <a href="https://metrika.yandex.ru/" target="_blank" rel="noopener noreferrer" className="inline-block relative group">
                <span className="bg-gradient-to-r from-[#bf3ff1] via-[#db83fc] to-[#db83fc] group-hover:from-[#9a13d2] group-hover:via-[#7a2fb0] group-hover:to-[#6a288a] bg-clip-text text-transparent font-semibold transition-colors duration-300 ease-out group-hover:opacity-90">Яндекс.Метрика</span>
                <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-[#bf3ff1] via-[#db83fc] to-[#db83fc] group-hover:from-[#9a13d2] group-hover:via-[#7a2fb0] group-hover:to-[#6a288a] transition-all duration-300 ease-out"></span>
              </a>
              {" "}для сбора агрегированной анонимной статистики. Метрика активируется и передаёт данные только при наличии согласия пользователя на аналитические cookies.
            </p>
            <p>
              Политика конфиденциальности Яндекса: <a href="https://yandex.ru/legal/confidential/" target="_blank" rel="noopener noreferrer" className="underline text-purple-600 hover:text-purple-700">yandex.ru/legal/confidential/</a>. При подключении других внешних аналитических или рекламных сервисов соответствующая информация и требования о согласии будут добавлены в Политику.
            </p>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-3">Таблица cookie</h4>
            <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-gray-50 text-gray-600">
                  <tr>
                    <th className="px-4 py-3">Имя</th>
                    <th className="px-4 py-3">Категория</th>
                    <th className="px-4 py-3">Назначение</th>
                    <th className="px-4 py-3">Срок хранения</th>
                    <th className="px-4 py-3">Поставщик</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-800">
                  <tr>
                    <td className="px-4 py-3 font-mono">_ym_uid</td>
                    <td className="px-4 py-3">Аналитические</td>
                    <td className="px-4 py-3">Уникальный идентификатор посетителя</td>
                    <td className="px-4 py-3">устанавливается Яндексом</td>
                    <td className="px-4 py-3">Яндекс.Метрика</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono">_ym_d</td>
                    <td className="px-4 py-3">Аналитические</td>
                    <td className="px-4 py-3">Дата первого визита</td>
                    <td className="px-4 py-3">устанавливается Яндексом</td>
                    <td className="px-4 py-3">Яндекс.Метрика</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono">_ym_isad</td>
                    <td className="px-4 py-3">Аналитические</td>
                    <td className="px-4 py-3">Признак блокировщика рекламы</td>
                    <td className="px-4 py-3">устанавливается Яндексом</td>
                    <td className="px-4 py-3">Яндекс.Метрика</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono">_ym_visorc</td>
                    <td className="px-4 py-3">Аналитические</td>
                    <td className="px-4 py-3">Работа Webvisor (анонимные записи сессий)</td>
                    <td className="px-4 py-3">устанавливается Яндексом</td>
                    <td className="px-4 py-3">Яндекс.Метрика</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono">yandexuid / yuidss</td>
                    <td className="px-4 py-3">Технические (Яндекс)</td>
                    <td className="px-4 py-3">Технические идентификаторы Яндекса</td>
                    <td className="px-4 py-3">устанавливается Яндексом</td>
                    <td className="px-4 py-3">Яндекс</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono">yabs-sid</td>
                    <td className="px-4 py-3">Технические (Яндекс)</td>
                    <td className="px-4 py-3">Сессионный идентификатор счётчика</td>
                    <td className="px-4 py-3">устанавливается Яндексом</td>
                    <td className="px-4 py-3">Яндекс</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-mono">localStorage: cookie_preferences</td>
                    <td className="px-4 py-3">Настройки (локально)</td>
                    <td className="px-4 py-3">Сохранение выбранных категорий cookies</td>
                    <td className="px-4 py-3">до удаления пользователем</td>
                    <td className="px-4 py-3">Dr. Kery Lady</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-mono">localStorage: cookie_preferences_map</td>
                    <td className="px-4 py-3">Настройки (локально)</td>
                    <td className="px-4 py-3">Карта согласий по категориям (essential/analytics/marketing)</td>
                    <td className="px-4 py-3">до удаления пользователем</td>
                    <td className="px-4 py-3">Dr. Kery Lady</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-mono">localStorage: cookie_consent_given</td>
                    <td className="px-4 py-3">Настройки (локально)</td>
                    <td className="px-4 py-3">Факт данного согласия</td>
                    <td className="px-4 py-3">до удаления пользователем</td>
                    <td className="px-4 py-3">Dr. Kery Lady</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-10">2.2 Серверные логи</h3>
          <p className="text-gray-700"><span className="font-semibold">Серверные логи</span> — это автоматически формируемые записи на стороне хостинг-провайдера или сервера сайта, в которых фиксируются технические события при обращении пользователя к сайту. Такие записи включают:</p>
          <ul className="list-none pl-0 space-y-1 text-gray-700 [&>li]:before:content-['-'] [&>li]:before:mr-2">
            <li>IP-адрес устройства пользователя;</li>
            <li>дату и время запроса;</li>
            <li>адрес запрашиваемой страницы;</li>
            <li>данные о браузере и операционной системе;</li>
          </ul>
          <h4 className="text-lg font-semibold mt-6">2.2.1 Цели применения серверных логов</h4>
          <p className="text-gray-700">Серверные логи применяются исключительно для технических и обеспечительных задач, в том числе:</p>
          <ul className="list-none pl-0 space-y-1 text-gray-700 [&>li]:before:content-['-'] [&>li]:before:mr-2">
            <li>поддержание стабильной и корректной работы сайта;</li>
            <li>мониторинг и устранение возможных технических сбоев;</li>
            <li>обеспечение безопасности ресурса и защита от атак;</li>
            <li>проведение расследований инцидентов и выполнение внутреннего аудита.</li>
          </ul>
          <h4 className="text-lg font-semibold mt-6">2.2.2 Сроки хранения и обезличивание</h4>
          <p className="text-gray-700">По умолчанию технические серверные логи, автоматически формируемые при обращении к сайту, хранятся в течение 30 календарных дней или в течение срока, установленного хостинг-провайдером. По истечении этого срока данные либо удаляются, либо обезличиваются.</p>
        </section>

        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">3. Цели обработки данных</h2>
          <p className="text-gray-700">
            Оператор обрабатывает сведения, получаемые с помощью cookies и серверных логов, исключительно для конкретных,
            законных и заранее определённых целей. Ниже перечислены основные цели обработки с кратким пояснением каждой из них.
          </p>

          <h3 className="text-lg font-semibold mt-3">3.1 Обеспечение корректной работы и доступности сайта</h3>
          <p className="text-gray-700">
            Обработка технических данных (необходимые cookies и серверные логи) позволяет поддерживать работоспособность ресурса,
            корректно обслуживать запросы пользователей и обеспечивать стабильную загрузку страниц.
          </p>

          <h3 className="text-lg font-semibold mt-3">3.2 Обеспечение безопасности и защита от злоупотреблений</h3>
          <p className="text-gray-700">
            Анализ серверных логов и технических cookie используются для обнаружения DDoS-атак и/или иных злоумышленных действий. Логи помогают проводить расследование инцидентов, восстанавливать цепочку событий и принимать корректирующие меры по усилению защиты.
          </p>

          <h3 className="text-lg font-semibold mt-3">3.3 Аналитический учёт и статистика посещаемости</h3>
          <p className="text-gray-700">
            При наличии согласия пользователя собираются обезличенные аналитические данные для оценки посещаемости, определения популярных разделов на странице, понимания путей взаимодействия пользователей с сайтом и измерения ключевых показателей эффективности. Эти сведения используются только в агрегированном или анонимизированном виде и не применяются для идентификации конкретных лиц.
          </p>

          <h3 className="text-lg font-semibold mt-3">3.4 Улучшение структуры, содержимого и удобства использования сайта</h3>
          <p className="text-gray-700">
            Анализ поведения посетителей позволяет выявлять узкие места в навигации, оптимизировать структуру страниц, ускорять
            загрузку, улучшать мобильную адаптацию и повышать общую удобочитаемость материалов. На основе собранных данных Оператор
            корректирует интерфейс и контент для повышения качества пользовательского опыта.
          </p>

          <h3 className="text-lg font-semibold mt-3">3.5 Маркетинговые цели и персонализированная реклама</h3>
          <p className="text-gray-700">
            Маркетинговые и рекламные cookie используются исключительно при наличии явного информированного согласия посетителя.
            Такие данные применяются для оценки эффективности рекламных кампаний, ретаргетинга и показа релевантных рекламных
            материалов. Любая персонализация рекламы осуществляется в рамках согласия и в соответствии с действующим
            законодательством о персональных данных.
          </p>

          <h3 className="text-lg font-semibold mt-3">3.6 Административные и юридические цели</h3>
          <p className="text-gray-700">
            В исключительных случаях данные могут обрабатываться для выполнения требований законодательства, реагирования на запросы
            уполномоченных органов, защиты прав и законных интересов Оператора (включая защиту интеллектуальной собственности и
            урегулирование споров).
          </p>

          
        </section>

        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">4. Правовые основания обработки персональных данных</h2>
          <p className="text-gray-700">
            Обработка данных на сайте осуществляется на законных основаниях и только в объёме, необходимом для достижения конкретных
            и заранее определённых целей. Ниже приводятся правовые основания, применимые к cookies‑файлам и серверным логам
            в рамках текущей реализации сайта.
          </p>

          <h3 className="text-lg font-semibold mt-3">4.1 Техническая необходимость и законный интерес Оператора</h3>
          <p className="text-gray-700">
            Необходимые (технические) cookies и серверные логи обрабатываются на основании законного интереса Оператора и/или
            наличия технической необходимости для обеспечения функционирования сайта, поддержания сессий, балансировки нагрузки,
            защиты ресурса от атак и неисправностей. Такая обработка необходима для предоставления базовой услуги — корректной
            работы и доступности сайта — и преследует законную цель надёжной и безопасной эксплуатации ресурса.
          </p>

          <h3 className="text-lg font-semibold mt-3">4.2 Добровольное, информированное и явное согласие субъекта</h3>
          <p className="text-gray-700">
            Аналитические и маркетинговые cookies обрабатываются только при наличии предварительного, информированного и явного согласия пользователя. Согласие фиксируется технически в локальных настройках сайта и хранится как подтверждение. Пользователь вправе в любой момент отозвать согласие через интерфейс или удалением данных сайта в браузере. Отзыв не влияет на законность обработки, осуществлённой до момента отзыва.
          </p>

          


          <h3 className="text-lg font-semibold mt-3">4.3 Документирование и подтверждение согласия</h3>
          <p className="text-gray-700">
            Факты предоставления и отзыва согласия регистрируются техническими средствами и могут храниться в целях документального подтверждения соблюдения правового режима обработки персональных данных. На уровне клиента запись производится в локальном хранилище браузера (localStorage) в ключах
            {" "}
            <span className="inline-block px-1 py-0.5 rounded border border-purple-400 bg-purple-50 text-purple-700 font-mono">cookie_preferences</span>,
            {" "}
            <span className="inline-block px-1 py-0.5 rounded border border-purple-400 bg-purple-50 text-purple-700 font-mono">cookie_preferences_map</span>
            {" "}и{" "}
            <span className="inline-block px-1 py-0.5 rounded border border-purple-400 bg-purple-50 text-purple-700 font-mono">cookie_consent_given</span>.
            {" "}Оператор не хранит серверных копий этих записей; при очистке данных браузера соответствующие записи удаляются. До момента их удаления такие локальные записи признаются допустимым техническим подтверждением факта предоставления/отзыва согласия.
          </p>

          
        </section>

        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">5. Трансграничная передача данных</h2>
          <h3 className="text-lg font-semibold mt-3">5.1 Размещение сайта</h3>
          <p className="text-gray-700">
            Сайт размещён и обслуживается с использованием услуг платформы {" "}
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="inline-block relative group">
              <span className="bg-gradient-to-r from-[#bf3ff1] via-[#db83fc] to-[#db83fc] group-hover:from-[#9a13d2] group-hover:via-[#7a2fb0] group-hover:to-[#6a288a] bg-clip-text text-transparent font-semibold transition-colors duration-300 ease-out group-hover:opacity-90">Vercel</span>
              <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-[#bf3ff1] via-[#db83fc] to-[#db83fc] group-hover:from-[#9a13d2] group-hover:via-[#7a2fb0] group-hover:to-[#6a288a] transition-all duration-300 ease-out"></span>
            </a>
            {" "}и сопутствующих CDN/edge‑сервисов, предоставляемых данной платформой и её партнёрами.
          </p>
          <h3 className="text-lg font-semibold mt-3">5.2 Трансграничная обработка технических данных</h3>
          <p className="text-gray-700">
            При эксплуатации платформы Vercel часть технической обработки запросов (CDN, edge‑узлы, serverless‑функции, логирование и пр.)
            может выполняться на серверах, расположенных за пределами Российской Федерации. В результате технические данные (включая IP‑адрес,
            метки времени обращений, URL‑запросы, user‑agent и иные сетевые метаданные), а также содержимое соответствующих логов и временно
            кэшируемые ресурсы могут передаваться и обрабатываться за пределами РФ.
          </p>
          
          <h3 className="text-lg font-semibold mt-3">5.3 Правовые последствия</h3>
          <p className="text-gray-700">
            Поскольку такая обработка может квалифицироваться как трансграничная передача персональных данных, Оператор информирует
            посетителей о факте возможной обработки данных вне РФ. При необходимости и в случаях, требуемых законом, Оператор предпримет
            дополнительные правовые шаги (получение согласия пользователей, уведомление/получение разрешения от уполномоченных органов и др.).
          </p>
          <h3 className="text-lg font-semibold mt-3">5.4 Меры минимизации рисков</h3>
          <p className="text-gray-700">
            Оператор применяет следующие меры для минимизации рисков при передаче и обработке технических и персональных данных за пределами РФ:
          </p>
          <ul className="list-none pl-0 space-y-1 text-gray-700 [&>li]:before:content-['-'] [&>li]:before:mr-2">
            <li>принцип минимизации данных — за границу не передаются сведения, превышающие необходимый минимум для функционирования сервиса;</li>
            <li>использование локализованных решений — для аналитики данных используются сервисы, расположенные в РФ;</li>
            <li>мониторинг и пересмотр — регулярная оценка рисков, проверка контрагентов и периодический аудит соответствия применяемых мер требованиям законодательства и внутренней политики Оператора.</li>
          </ul>
          
        </section>

        

        

        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">6. Права субъектов персональных данных и порядок их реализации</h2>
          <h3 className="text-lg font-semibold mt-3">6.1 Перечень прав</h3>
          <p className="text-gray-700">Субъект персональных данных вправе:</p>
          <ul className="list-none pl-0 space-y-1 text-gray-700 [&>li]:before:content-['-'] [&>li]:before:mr-2">
            <li>получать полную информацию об обработке своих персональных данных — о целях, основаниях, способах, объёме и сроках обработки;</li>
            <li>требовать уточнения, дополнения или обновления своих персональных данных;</li>
            <li>требовать блокировки, удаления или уничтожения персональных данных.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-3">6.2 Порядок подачи запроса</h3>
          <p className="text-gray-700">Запросы, связанные с реализацией прав субъекта персональных данных, направляются на электронную почту Оператора: <a href="mailto:Loveliaslove@yandex.ru" className="underline text-purple-600 hover:text-purple-700">Loveliaslove@yandex.ru</a>.</p>
          <p className="text-gray-700">Почтовый адрес для корреспонденции предоставляется по запросу — для получения почтового адреса направьте обращение на указанный e‑mail.</p>
          <p className="text-gray-700">В запросе рекомендуется указывать:</p>
          <ul className="list-none pl-0 space-y-1 text-gray-700 [&>li]:before:content-['-'] [&>li]:before:mr-2">
            <li>фамилию, имя, отчество (если применимо) субъекта персональных данных;</li>
            <li>контактные данные для связи (электронная почта и/или номер телефона);</li>
            <li>суть обращения и конкретные требования (какое право реализуется и какие действия ожидаются от Оператора);</li>
            <li>при необходимости — предпочтительный способ получения ответа.</li>
          </ul>
          
          <h3 className="text-lg font-semibold mt-3">6.3 Сроки рассмотрения</h3>
          <p className="text-gray-700">Обращения и запросы рассматриваются в сроки, установленные действующим законодательством Российской Федерации. Как правило, ответ предоставляется не позднее 30 календарных дней с даты получения Оператором полного и надлежащим образом оформленного запроса.</p>
          <p className="text-gray-700">В случае, если запрос содержит неполные или некорректные сведения, срок рассмотрения приостанавливается со дня направления Оператором запроса о предоставлении дополнительных сведений (документов) до дня получения таких сведений. В исключительных случаях, когда для надлежащего рассмотрения обращения требуется проведение дополнительной проверки или иные действия, прямо предусмотренные законом, срок рассмотрения может быть продлён в порядке, установленном применимым законодательством; о продлении срока и причинах продления Оператор уведомляет заявителя.</p>
          <h3 className="text-lg font-semibold mt-3">6.4 Исполнение запросов и уведомление</h3>
          <p className="text-gray-700">По итогам рассмотрения заявитель уведомляется о результатах; при положительном решении исполняются требуемые действия в пределах закона и технических возможностей.</p>
          <h3 className="text-lg font-semibold mt-3">6.5 Ограничения и исключения</h3>
          <p className="text-gray-700">Оператор вправе отказать в удовлетворении запроса в случаях, прямо предусмотренных законом (например, если обработка необходима для исполнения правовых обязанностей).</p>
        </section>

        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">7. Изменение Политики</h2>
          <h3 className="text-lg font-semibold mt-3">7.1 Общие положения</h3>
          <p className="text-gray-700">Оператор оставляет за собой право вносить изменения в настоящую Политику. Любые изменения публикуются в обновлённой редакции на странице <TooltipLink href="/privacy" tooltip="Данная страница" className="underline text-purple-600 hover:text-purple-700">Политика конфиденциальности</TooltipLink> с указанием новой версии и даты вступления в силу.</p>

          

          <h3 className="text-lg font-semibold mt-3">7.2 Срок оповещения и согласие</h3>
          <p className="text-gray-700">Оператор направляет уведомления о изменениях не позднее чем за 30 календарных дней до даты их вступления в силу. Если изменение требует отдельного согласия, механизм запроса согласия будет реализован до начала такой обработки.</p>

          <h3 className="text-lg font-semibold mt-3">7.3 История версий</h3>
          <p className="text-gray-700">Актуальная версия Политики и, при наличии, архив предыдущих редакций (версия, дата, краткое описание изменений) доступны на этой странице для обеспечения прозрачности.</p>

          <h3 className="text-lg font-semibold mt-3">7.4 Действие изменений для ранее собранных данных</h3>
          <p className="text-gray-700">Изменения Политики не затрагивают законность ранее осуществлённой обработки, если иное прямо не предусмотрено новой редакцией. Если новая обработка затрагивает ранее собранные данные и требует иного правового основания (включая новое согласие), Оператор запросит согласие либо прекратит обработку в части, выходящей за рамки первоначальных условий.</p>

          <h3 className="text-lg font-semibold mt-3">7.5 Экстренные изменения</h3>
          <p className="text-gray-700">В исключительных случаях (угроза безопасности, требование уполномоченных органов и пр.) изменения могут вступать в силу незамедлительно; Оператор публикует обоснование срочного изменения и уведомляет пользователей о принятых мерах по минимизации рисков.</p>

          
        </section>

        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">8. Контакты</h2>
          <div className="text-gray-700 space-y-1">
            <p><span className="font-semibold">Оператор:</span> Дрожжина Карина Тагировна (бренд Dr. Kery Lady)</p>
            <p><span className="font-semibold">Телефон:</span> +7 963 640 4686</p>
            <p><span className="font-semibold">E‑mail (вопросы по защите персональных данных):</span> <a href="mailto:Loveliaslove@yandex.ru" className="underline text-purple-600 hover:text-purple-700">Loveliaslove@yandex.ru</a></p>
            <p><span className="font-semibold">Юрисдикция:</span> Российская Федерация</p>
            
          </div>

        </section>

        <div className="w-full h-px bg-gray-200 mb-8"></div>

        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">История версий</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="px-4 py-3">Версия</th>
                  <th className="px-4 py-3">Дата вступления в силу</th>
                  <th className="px-4 py-3">Краткое описание изменений</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-800">
                <tr>
                  <td className="px-4 py-3 font-mono">1.0</td>
                  <td className="px-4 py-3">17.09.2025</td>
                  <td className="px-4 py-3">Первичная публикация Политики конфиденциальности.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">Все изменения отражаются в этой истории: для каждой новой версии указывается её номер и дата вступления в силу.</p>
        </section>
      </PageReveal>
    </div>
  );
}











