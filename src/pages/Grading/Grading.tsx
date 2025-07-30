import PageMeta from "../../components/common/PageMeta";
import { AlertIcon, ClockIcon, GraphIcon, SuccessIcon, WarningIcon } from "../../icons";
import GradingMetrics from "../../components/ecommerce/GradingMetrics";

export default function Grading() {
    return (
        <>
            <PageMeta
                title="IMS"
                description="IMS"
            />

            <div className="flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between">
                <div className="w-full">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white/90">
                        AI Assignment Grading
                    </h2>
                    <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
                        Review and grade student assignments with AI assistance or manually adjust scores
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-4 md:gap-6">
                <div className="col-span-12 space-y-6 xl:col-span-12">
                    <GradingMetrics />
                </div>


                <div className="col-span-12 mt-4">
                    <div className="bg-white dark:bg-white/[0.03] rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-6">Grading Queue</h3>
                        <div className="space-y-4">

                            <div className="flex items-center justify-between p-5 border border-gray-200 rounded-xl">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gray-100 dark:bg-white-700 rounded-full flex items-center justify-center">
                                        <span className="text-primary dark:text-primary font-semibold text-sm">CS</span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-800 dark:text-white/90">Data Structures-Assignment 3</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Computer Science | Due:March 18,2025</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">4 submissions | AI Confidence: 92%</div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end">
                                    <div className="flex items-center gap-2">
                                        <SuccessIcon className="text-green size-6" />
                                        <span className="text-green dark:text-green text-md">AI Ready</span>
                                    </div>
                                    <div className="ml-3">
                                        <button className="inline-flex items-center justify-center gap-2 rounded-xl transition bg-primary hover:bg-primary px-4 py-2 text-md bg-primary text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300 ">Grade Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-5 border border-gray-200 rounded-xl">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gray-100 dark:bg-white-700 rounded-full flex items-center justify-center">
                                        <span className="text-green dark:text-green font-semibold text-sm">MA</span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-800 dark:text-white/90">Calculus II - Midterm Exam</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Mathematics | Due: March 18,2025</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">32 submissions | AI Confidence: 88%</div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end">
                                    <div className="flex items-center gap-2">
                                        <AlertIcon className="text-orange size-8" />
                                        <span className="text-orange dark:text-orange text-md">Review</span>
                                    </div>
                                    <div className="ml-3">
                                        <button className="inline-flex items-center justify-center gap-2 rounded-xl transition bg-green hover:bg-green px-4 py-2 text-md bg-green text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300 ">Grade Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-5 border border-gray-200 rounded-xl">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gray-100 dark:bg-white-700 rounded-full flex items-center justify-center">
                                        <span className="text-purple dark:text-purple font-semibold text-sm">EN</span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-800 dark:text-white/90">English Literature - Essay Analysis</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">English | Due: March 20,2025</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">28 submissions | AI Confidence: 84%</div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end">
                                    <div className="flex items-center gap-2">
                                        <ClockIcon className="text-yellow size-8" />
                                        <span className="text-yellow dark:text-yellow text-md">Analyzing</span>
                                    </div>
                                    <div className="ml-3">
                                        <button className="inline-flex items-center justify-center gap-2 rounded-xl transition bg-gray-300 hover:bg-gray px-4 py-2 text-md bg-gray text-black shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300 ">Processing</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="col-span-12 mt-4">
                    <div className="bg-white dark:bg-white/[0.03] rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-6">AI Grading Tools</h3>
                        <div className="space-y-4">

                            <div className="flex items-center justify-between p-5 border border-gray-200 rounded-xl">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gray-100 dark:bg-white-700 rounded-full flex items-center justify-center">
                                        <GraphIcon className="text-purple size-6" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-800 dark:text-white/90">Rubric-Based Grading</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Automated assessment using custom rubrics</div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end">
                                    <div className="flex items-center gap-2">
                                        <span className="text-primary dark:text-primary text-md">View Result</span>
                                    </div>
                                    <div className="ml-3">
                                        <button className="inline-flex items-center justify-center gap-2 rounded-xl transition bg-purple hover:bg-purple px-4 py-2 text-md bg-purple text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300 ">Configure</button>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-between p-5 border border-gray-200 rounded-xl">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gray-100 dark:bg-white-700 rounded-full flex items-center justify-center">
                                        <WarningIcon className="text-red size-6" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-800 dark:text-white/90">Plagiarism Detection</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">AI-powered similarity checking & reporting</div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end">
                                    <div className="flex items-center gap-2">
                                        <span className="text-primary dark:text-primary text-md">View Report</span>
                                    </div>
                                    <div className="ml-3">
                                        <button className="inline-flex items-center justify-center gap-2 rounded-xl transition bg-red hover:bg-red px-4 py-2 text-md bg-red text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300 ">Scan Now</button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-5 border border-gray-200 rounded-xl">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gray-100 dark:bg-white-700 rounded-full flex items-center justify-center">
                                        <ClockIcon className="text-green size-6" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-800 dark:text-white/90">Smart Feedback Generator</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Personalized feedback for each student</div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end">
                                    <div className="flex items-center gap-2">
                                        <span className="text-primary dark:text-primary text-md">Templates</span>
                                    </div>
                                    <div className="ml-3">
                                        <button className="inline-flex items-center justify-center gap-2 rounded-xl transition bg-green hover:bg-green px-4 py-2 text-md bg-green text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300 ">Generate</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
