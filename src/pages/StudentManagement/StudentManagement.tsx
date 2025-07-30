import PageMeta from "../../components/common/PageMeta";

export default function StudentManagement() {
    return (
        <>
            <PageMeta
                title="IMS"
                description="IMS"
            />

            <div className="flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between">
                <div className="w-full">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white/90">
                        Student Management
                    </h2>
                    <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
                        Manage student records and exam assignments
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-4 md:gap-6">
                <div className="col-span-12">
                    <div className="bg-white dark:bg-white/[0.03] rounded-2xl border border-gray-200 dark:border-gray-800 p-4 md:p-6">
                        {/* Search and Filter */}
                        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-4">
                            <div className="flex-1 flex items-center gap-3">
                                <div className="relative w-full md:w-96">
                                    <input
                                        type="text"
                                        placeholder="Search Student..."
                                        className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 19L15 15M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
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
                        <div className="hidden md:grid grid-cols-16 py-3 px-2 bg-gray-50 dark:bg-gray-900 rounded-lg text-xs font-semibold text-gray-500 dark:text-gray-400">
                            <div className="col-span-4">STUDENT NAME</div>
                            <div className="col-span-3">STUDENT ID</div>
                            <div className="col-span-2">CLASS / COURSE</div>
                            <div className="col-span-2">SECTION</div>
                            <div className="col-span-2">ROLL NO.</div>
                            <div className="col-span-2">EXAM STATUS</div>
                            <div className="col-span-1 text-center">ACTIONS</div>
                        </div>
                        {/* Table Row */}
                        <div className="flex flex-col md:grid grid-cols-16 items-center py-4 px-2 border-b border-gray-100 dark:border-gray-800 last:border-0">
                            <div className="col-span-4 w-full flex flex-col gap-1">
                                <span className="text-gray-800 dark:text-white/90 text-base">Dr. Priya Sharma</span>
                            </div>
                            <div className="col-span-3 w-full flex flex-col gap-1">
                                <span className="text-gray-800 dark:text-white/90 text-base">ID12345</span>
                            </div>
                            <div className="col-span-2 w-full flex flex-col gap-1">
                                <span className="text-gray-800 dark:text-white/90 text-base">B.Sc</span>
                            </div>
                            <div className="col-span-2 w-full flex flex-col gap-1">
                                <span className="text-gray-800 dark:text-white/90 text-base">A</span>
                            </div>
                            <div className="col-span-2 w-full flex flex-col gap-1">
                                <span className="text-gray-800 dark:text-white/90 text-base">12</span>
                            </div>
                            <div className="col-span-2 w-full flex flex-col gap-1">
                                <span className="text-gray-800 dark:text-white/90 text-base">Active</span>
                            </div>
                            <div className="col-span-1 w-full flex items-center justify-center mt-3 md:mt-0 gap-2">
                                <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                                    {/* your icon */}
                                </button>
                                <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                                    {/* your icon */}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
