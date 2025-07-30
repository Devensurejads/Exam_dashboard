import PageMeta from "../../components/common/PageMeta";
import Button from "../../components/ui/button/Button";
import { CapIcon, ClockIcon, DotsIcon, EyeIcon, FileIcon, ImportIcon, PauseIcon, PlusIcon, ShareIcon, UploadIcon } from "../../icons";
import ExamManagmentMetrics from "../../components/ecommerce/ExamManagementMetrics";
import Badge from "../../components/ui/badge/Badge";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ExamManagment() {
    const [linkExpiration, setLinkExpiration] = useState(null);
    return (
        <>
            <PageMeta
                title="IMS"
                description="IMS"
            />

            <div className="flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between">
                <div className="w-full">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white/90">
                        Exam Management
                    </h2>
                    <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
                        Monitor and manage all your examinations
                    </p>
                </div>
                <div className="flex items-start w-full gap-3 sm:justify-end">
                    <div className="flex items-center gap-5">
                        <Button
                            size="sm"
                            variant="outline"
                            startIcon={<CapIcon className="size-5" />}
                        >
                            Import Exam
                        </Button>
                        <Button
                            size="sm"
                            variant="primary"
                            startIcon={<PlusIcon className="size-5" />}
                        >
                            Create New Exam
                        </Button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-4 md:gap-6">
                <div className="col-span-12 space-y-6 xl:col-span-12">
                    <ExamManagmentMetrics />
                </div>

                {/* Exam List */}
                <div className="col-span-12">
                    <div className="bg-white dark:bg-white/[0.03] rounded-2xl border border-gray-200 dark:border-gray-800 p-4 md:p-6">
                        {/* Search and Filter */}
                        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-4">
                            <div className="flex-1 flex items-center gap-3">
                                <div className="relative w-full md:w-96">
                                    <input
                                        type="text"
                                        placeholder="Search exams..."
                                        className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 19L15 15M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </div>
                            </div>
                            <div className="w-full md:w-auto">
                                <select className="w-full md:w-40 px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200 focus:outline-none">
                                    <option>All Status</option>
                                    <option>Active</option>
                                    <option>Inactive</option>
                                    <option>Completed</option>
                                </select>
                            </div>
                        </div>
                        {/* Table Header */}
                        <div className="hidden md:grid grid-cols-12 py-3 px-2 bg-gray-50 dark:bg-gray-900 rounded-lg text-xs font-semibold text-gray-500 dark:text-gray-400">
                            <div className="col-span-4">EXAM DETAILS</div>
                            <div className="col-span-3">SCHEDULE</div>
                            <div className="col-span-2">PARTICIPATION</div>
                            <div className="col-span-2">STATUS</div>
                            <div className="col-span-1 text-center">ACTIONS</div>
                        </div>
                        {/* Table Row */}
                        <div className="flex flex-col md:grid grid-cols-12 items-center py-4 px-2 border-b border-gray-100 dark:border-gray-800 last:border-0">
                            {/* Exam Details */}
                            <div className="col-span-4 w-full flex flex-col gap-1">
                                <span className="font-semibold text-gray-800 dark:text-white/90 text-base">Dr. Priya Sharma</span>
                                <span className="text-gray-500 dark:text-gray-400 text-sm">CS201 • 25 questions • 100 marks</span>
                            </div>
                            {/* Schedule */}
                            <div className="col-span-3 w-full flex flex-col gap-1 mt-3 md:mt-0">
                                <span className="flex items-center gap-2 text-gray-700 dark:text-gray-200 text-sm">
                                    <svg className="inline-block" width="16" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.6665 6.31359H13.3332M2.6665 6.31359V12.1913C2.6665 12.9394 2.6665 13.3132 2.81183 13.599C2.93966 13.8503 3.14349 14.0549 3.39437 14.183C3.67931 14.3284 4.0525 14.3284 4.79778 14.3284H11.2019C11.9472 14.3284 12.3198 14.3284 12.6048 14.183C12.8556 14.0549 13.0602 13.8503 13.188 13.599C13.3332 13.3135 13.3332 12.9402 13.3332 12.1935V6.31359M2.6665 6.31359V5.7794C2.6665 5.03128 2.6665 4.65694 2.81183 4.3712C2.93966 4.11985 3.14349 3.91565 3.39437 3.78758C3.67958 3.64199 4.05323 3.64199 4.79997 3.64199H5.33317M13.3332 6.31359V5.77721C13.3332 5.03055 13.3332 4.65666 13.188 4.3712C13.0602 4.11985 12.8556 3.91565 12.6048 3.78758C12.3196 3.64199 11.9467 3.64199 11.2 3.64199H10.6665M10.6665 2.30618V3.64199M10.6665 3.64199H5.33317M5.33317 2.30618V3.64199" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.3358" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    3/20/2024
                                </span>
                                <span className="flex items-center gap-2 text-gray-700 dark:text-gray-200 text-sm">
                                    <svg className="inline-block" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 4.5V8.5H12M8 14.5C4.68629 14.5 2 11.8137 2 8.5C2 5.18629 4.68629 2.5 8 2.5C11.3137 2.5 14 5.18629 14 8.5C14 11.8137 11.3137 14.5 8 14.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    2:00:00 PM - 4:00:00 PM
                                </span>
                            </div>
                            {/* Participation */}
                            <div className="col-span-2 w-full flex items-center gap-2 mt-3 md:mt-0">
                                <svg className="inline-block" width="16" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 14.3283C14 13.1651 12.8869 12.1755 11.3333 11.8088M10 14.3284C10 12.8529 8.20914 11.6568 6 11.6568C3.79086 11.6568 2 12.8529 2 14.3284M10 9.65308C11.4728 9.65308 12.6667 8.45697 12.6667 6.98148C12.6667 5.50599 11.4728 4.30988 10 4.30988M6 9.65308C4.52724 9.65308 3.33333 8.45697 3.33333 6.98148C3.33333 5.50599 4.52724 4.30988 6 4.30988C7.47276 4.30988 8.66667 5.50599 8.66667 6.98148C8.66667 8.45697 7.47276 9.65308 6 9.65308Z" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.3358" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                <span className="text-gray-700 dark:text-gray-200 text-sm">23/45</span>
                            </div>
                            {/* Status */}
                            <div className="col-span-2 w-full flex items-center mt-3 md:mt-0">
                                <span className="inline-block"><Badge color="success" >Active</Badge></span>
                            </div>
                            {/* Actions */}
                            <div className="col-span-1 w-full flex items-center justify-center mt-3 md:mt-0 gap-2">
                                <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                                    <PauseIcon className="size-5 text-orange dark:text-white/90" />
                                </button>
                                <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                                    <DotsIcon className="size-5 text-orange dark:text-white/90" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Exam Link Generator & Paper Distribution */}
                <div className="col-span-12 mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Exam Link Generator */}
                        <div className="bg-white dark:bg-white/[0.03] rounded-2xl border border-gray-200 dark:border-gray-800 p-6 flex flex-col">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-6">Exam Link Generator</h3>
                            <form className="flex flex-col gap-4 flex-1">
                                <div>
                                    <label className="block text-gray-700 dark:text-gray-300 text-sm mb-2">Select Exam</label>
                                    <select className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200 focus:outline-none">
                                        <option>Choose an exam</option>
                                    </select>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-700 dark:text-gray-300 text-sm mb-2">Time Limit(minutes)</label>
                                        <input type="text" className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200 focus:outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 dark:text-gray-300 text-sm mb-2">Attempt Limit</label>
                                        <input type="text" className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200 focus:outline-none" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-gray-700 dark:text-gray-300 text-sm mb-2">Link Expiration</label>
                                    <div className="w-full">
                                        <DatePicker
                                            selected={linkExpiration}
                                            onChange={(date: any) => setLinkExpiration(date)}
                                            dateFormat="dd-MM-yyyy"
                                            placeholderText="Select date"
                                            className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200 focus:outline-none"
                                        />
                                    </div>

                                </div>
                                <div className="mt-4">
                                    <button type="button" className="w-full bg-primary text-white rounded-xl py-3 font-semibold text-base shadow-theme-xs hover:bg-brand-600 transition">Generate Secure Links</button>
                                </div>
                            </form>
                        </div>


                        {/* Paper Distribution */}
                        <div className="bg-white dark:bg-white/[0.03] rounded-2xl border border-gray-200 dark:border-gray-800 p-6 flex flex-col">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-6">Paper Distribution</h3>
                            <div className="flex flex-col gap-3">
                                {/* Question Paper */}
                                <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-900 rounded-xl px-4 py-3">
                                    <div className="flex items-center gap-3">
                                        <FileIcon className="size-8 text-orange dark:text-white/90" />
                                        <div>
                                            <div className="font-medium text-gray-800 dark:text-white/90 text-sm">Question Paper v2.1</div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400">Updated 2 hours ago</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                                            <ImportIcon className="size-5 text-black dark:text-white/90" />
                                        </button>
                                        <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                                            <ShareIcon className="size-5 text-black dark:text-white/90" />
                                        </button>
                                    </div>
                                </div>
                                {/* Answer Key */}
                                <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-900 rounded-xl px-4 py-3">
                                    <div className="flex items-center gap-3">
                                        <ClockIcon className="size-8 text-green dark:text-white/90" />
                                        <div>
                                            <div className="font-medium text-gray-800 dark:text-white/90 text-sm">Answer Key</div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400">Generated wit AI</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                                            <EyeIcon className="size-5 text-black dark:text-white/90" />
                                        </button>
                                        <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                                            <ShareIcon className="size-5 text-black dark:text-white/90" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center mt-8">
                                <button className="flex items-center gap-2 text-black dark:text-white/90 font-medium text-base hover:underline">
                                    <UploadIcon className="size-5 text-black dark:text-white/90" />
                                    Upload Revised Version
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Submissions Timeline */}
                <div className="col-span-12 mt-4">
                    <div className="bg-white dark:bg-white/[0.03] rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-6">Recent Submissions Timeline</h3>
                        <div className="space-y-4">
                            {/* Alice Johnson */}
                            <div className="flex items-center justify-between p-5 border border-gray-400 rounded-xl">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                                        <span className="text-purple-700 dark:text-purple-300 font-semibold text-sm">AJ</span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-800 dark:text-white/90">Alice Johnson</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">Data Structures Midterm</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <Badge color="success">On Time</Badge>
                                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">2 minutes ago</div>
                                </div>
                            </div>
                            {/* Bob Smith */}
                            <div className="flex items-center justify-between p-5 border border-gray-400 rounded-xl">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                                        <span className="text-purple-700 dark:text-purple-300 font-semibold text-sm">BS</span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-800 dark:text-white/90">Bob Smith</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">Data Structures Midterm</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <Badge color="success">On Time</Badge>
                                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">5 minutes ago</div>
                                </div>
                            </div>
                            {/* Carol Davis */}
                            <div className="flex items-center justify-between p-5 border border-gray-400 rounded-xl">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                                        <span className="text-purple-700 dark:text-purple-300 font-semibold text-sm">CD</span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-800 dark:text-white/90">Carol Davis</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">Algorithms Quiz</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <Badge color="error">Late</Badge>
                                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">12 minutes ago</div>
                                </div>
                            </div>
                            {/* David Wilson */}
                            <div className="flex items-center justify-between p-5 border border-gray-400 rounded-xl">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                                        <span className="text-purple-700 dark:text-purple-300 font-semibold text-sm">DW</span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-800 dark:text-white/90">David Wilson</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">Data Structures Midterm</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <Badge color="success">On Time</Badge>
                                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">18 minutes ago</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}
