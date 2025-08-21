import AreaChartOne from "../../components/charts/area/AreaChartOne";
import BarChartOne from "../../components/charts/bar/BarChartOne";
import LineChartOne from "../../components/charts/line/LineChartOne";
import PageMeta from "../../components/common/PageMeta";
import EcommerceResultMetrics from "../../components/ecommerce/EcommerceResultMetrics";
import EcommerceStudentMetrics from "../../components/ecommerce/EcommerceStudentMetrics";
import Button from "../../components/ui/button/Button";
import { AwardIcon, BookIcon, BrainIcon, CapIcon, ChartIcon, CrossIcon, CupIcon, GoalIcon, GraphIcon, GroupIcon, HeartBeatIcon, ImportIcon, InfoIcon, PlusIcon, RightIcon, SuccessIcon, UploadIcon } from "../../icons";


export default function ResultAndAnalysis() {
    return (
        <>
            <PageMeta
                title="IMS"
                description="IMS"
            />

            <div className="flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between">
                <div className="w-full">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white/90">
                        Result & Analytics
                    </h2>
                    <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
                        Track your performance and Identify areas for improvement
                    </p>
                </div>
                <div className="flex items-start w-full gap-3 sm:justify-end">
                    <div className="flex items-center gap-5">
                        <Button
                            size="sm"
                            variant="outline"
                            startIcon={<UploadIcon className="size-5" />}
                        >
                            Share
                        </Button>
                        <Button
                            size="sm"
                            variant="primary"
                            startIcon={<ImportIcon className="size-5" />}
                        >
                            Export
                        </Button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-4 md:gap-6">
                <div className="col-span-12 space-y-6 xl:col-span-12">
                    <EcommerceResultMetrics />
                </div>
                <div className="col-span-12 space-y-6 xl:col-span-12">
                    <div className="bg-white dark:bg-white/[0.03] rounded-2xl border border-gray-200 dark:border-gray-800 p-4 md:p-6">
                        <div className="flex flex-col gap-3 md:flex-row md:items-center">
                            <div className="w-full md:w-auto">
                                <select className="w-full md:w-40 px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200 focus:outline-none">
                                    <option>Time</option>
                                    <option>Active</option>
                                    <option>Inactive</option>
                                    <option>Completed</option>
                                </select>
                            </div>
                            <div className="w-full md:w-auto">
                                <select className="w-full md:w-40 px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200 focus:outline-none">
                                    <option>Subjects</option>
                                    <option>Active</option>
                                    <option>Inactive</option>
                                    <option>Completed</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 mt-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Exam Link Generator */}
                        <div className="bg-white dark:bg-white/[0.03] rounded-2xl border border-gray-200 dark:border-gray-800 p-6 flex flex-col">
                            <div className="flex gap-2">
                                <ChartIcon className="size-6 text-primary dark:text-white/90" />
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-6">Performance Trend</h3>
                            </div>
                            <AreaChartOne />
                        </div>
                        <div className="bg-white dark:bg-white/[0.03] rounded-2xl border border-gray-200 dark:border-gray-800 p-6 flex flex-col">
                            <div className="flex gap-2">
                                <ChartIcon className="size-6 text-primary dark:text-white/90" />
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-6">Performance Trend</h3>
                            </div>
                            <BarChartOne />
                        </div>
                    </div>
                </div>
                <div className="col-span-12 mt-2">
                    <div className="grid grid-cols-1 md:grid-cols-1">
                        <div className="bg-white dark:bg-white/[0.03] rounded-2xl border border-gray-200 dark:border-gray-800 p-6 flex flex-col">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-6">Recent Activity</h3>
                            <div className="flex flex-col gap-3">
                                {/* AI Grading Accuracy */}
                                <div className="flex items-center justify-between p-5 border border-gray-200 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gray-100 dark:bg-white-700 rounded-full flex items-center justify-center">
                                            <AwardIcon className="text-primary size-6" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-800 dark:text-white/90">Mathematics - Advanced Calculus</div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">2025-01-15 | Mathematics</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-semibold text-lg dark:text-white/90">87%</div>
                                        <div className="text-gray-400 dark:text-white/90">Rank #3</div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-5 border border-gray-200 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gray-100 dark:bg-white-700 rounded-full flex items-center justify-center">
                                            <GoalIcon className="text-purple size-6" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-800 dark:text-white/90">Mathematics - Advanced Calculus</div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">2025-01-15 | Mathematics</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-semibold text-lg dark:text-white/90">87%</div>
                                        <div className="text-gray-400 dark:text-white/90">Rank #3</div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-5 border border-gray-200 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gray-100 dark:bg-white-700 rounded-full flex items-center justify-center">
                                            <CupIcon className="text-orange size-6" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-800 dark:text-white/90">Mathematics - Advanced Calculus</div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">2025-01-15 | Mathematics</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-semibold text-lg dark:text-white/90">87%</div>
                                        <div className="text-gray-400 dark:text-white/90">Rank #3</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6 mt-4">

            </div>
        </>
    );
}