import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Check } from 'lucide-react'

export default function PricingSingle() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-2xl space-y-6 text-center mb-12">
                    <h1 className="text-center text-4xl font-semibold lg:text-5xl">Бесплатная консультация</h1>
                </div>

                <div className="mt-8 md:mt-20">
                    <Card className="max-w-4xl mx-auto">
                        <CardContent className="p-8 md:p-12">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                {/* Левая секция - цена и основная информация */}
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-2xl font-bold mb-2">Suite Enterprise</h2>
                                        <p className="text-gray-600 mb-4">For your company of any size</p>
                                        <div className="text-4xl font-bold mb-6">$234</div>
                                    </div>
                                    
                                    <Button className="w-full bg-black hover:bg-gray-800 text-white">
                                        Get started
                                    </Button>
                                    
                                    <p className="text-sm text-gray-500">
                                        Includes: Security, Unlimited Storage, Payment, Search engine, and all features
                                    </p>
                                </div>

                                {/* Правая секция - преимущества и партнеры */}
                                <div className="space-y-6">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2">
                                            <Check className="size-4" />
                                            <span>First premium advantage</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Check className="size-4" />
                                            <span>Second advantage weekly</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Check className="size-4" />
                                            <span>Third advantage donate to project</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Check className="size-4" />
                                            <span>Fourth, access to all components weekly</span>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-4">
                                        <p className="text-sm text-gray-600">
                                            Team can be any size, and you can add or switch members as needed. Companies using our platform include:
                                        </p>
                                        
                                        <div className="flex items-center gap-6">
                                            <span className="font-semibold">NVIDIA</span>
                                            <span className="font-semibold">column</span>
                                            <span className="font-semibold">GitHub</span>
                                            <span className="font-semibold">Nike</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
} 