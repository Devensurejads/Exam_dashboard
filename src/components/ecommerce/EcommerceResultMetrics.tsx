import { BookIcon, GoalIcon, GraphIcon, GroupIcon } from "../../icons";

export default function EcommerceResultMetrics() {

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
            <div className="rounded-2xl border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-xl text-black-700 dark:text-white-700">
                            Avg Score
                        </span>
                        <h3 className="mt-2 font-bold text-primary text-title-md dark:text-white/90">
                            86%
                        </h3>
                    </div>

                    <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-4xl dark:bg-gray-800">
                        <GraphIcon className="text-primary size-8 dark:text-primary/90" />
                    </div>
                </div>
            </div>

            <div className="rounded-2xl border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-xl text-black-700 dark:text-white-700">
                            Total Exams
                        </span>
                        <h3 className="mt-2 font-bold text-green text-title-md dark:text-white/90">
                            4
                        </h3>
                    </div>
                    <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-4xl dark:bg-gray-800">
                        <BookIcon className="text-green size-8 dark:text-purple/90" />
                    </div>
                </div>
            </div>

            <div className="rounded-2xl border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-xl text-black-700 dark:text-white-700">
                            Avg Rank
                        </span>
                        <h3 className="mt-2 font-bold text-purple text-title-md dark:text-white/90">
                            #6
                        </h3>
                    </div>

                    <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-4xl dark:bg-gray-800">
                        <GroupIcon className="text-purple size-8 dark:text-green/90" />
                    </div>
                </div>
            </div>

            <div className="rounded-2xl border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-xl text-black-700 dark:text-white-700">
                            Improvement
                        </span>
                        <h3 className="mt-2 font-bold text-orange text-title-md dark:text-white/90">
                            +5.7%
                        </h3>
                    </div>
                    <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-4xl dark:bg-gray-800">
                        <GraphIcon className="text-orange size-8 dark:text-orange/90" />
                    </div>
                </div>
            </div>

            <div className="rounded-2xl border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-xl text-black-700 dark:text-white-700">
                            Study Time
                        </span>
                        <h3 className="mt-2 font-bold text-red text-title-md dark:text-white/90">
                            24.5h
                        </h3>
                    </div>

                    <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-4xl dark:bg-gray-800">
                        <GraphIcon className="text-red size-8 dark:text-orange/90" />
                    </div>
                </div>
            </div>

            <div className="rounded-2xl border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-xl text-black-700 dark:text-white-700">
                            Study Streak
                        </span>
                        <h3 className="mt-2 font-bold text-black text-title-md dark:text-white/90">
                            7 days
                        </h3>
                    </div>

                    <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-4xl dark:bg-gray-800">
                        <GoalIcon className="text-black size-8 dark:text-orange/90" />
                    </div>
                </div>
            </div>
        </div>
    );
}
