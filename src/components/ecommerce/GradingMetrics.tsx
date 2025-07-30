import { CalendarIcon, ClockIcon, FileIcon, GroupIcon } from "../../icons";
import Badge from "../ui/badge/Badge";

export default function ExamManagmentMetrics() {

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 md:gap-6">
            <div className="rounded-2xl border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                <div className="flex justify-between">
                    <div className="w-[85%]">
                        <span className="text-md font-semibold text-black-700 dark:text-white-700">
                            Pending Assignments
                        </span>
                        <h3 className="mt-2 font-bold text-primary text-2xl dark:text-white/90">
                            23
                        </h3>
                        <span className="text-sm text-gray-400 dark:text-white-400">
                            Ready for grading
                        </span>
                        <Badge color={"primary"} className="mt-2">65% AI-Ready</Badge>
                    </div>
                    <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-4xl dark:bg-blue-700"></div>
                </div>
            </div>
            <div className="rounded-2xl border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                <div className="flex justify-between">
                    <div className="w-[85%]">
                        <span className="text-md font-semibold text-black-700 dark:text-white-700">
                            Grated Today
                        </span>
                        <h3 className="mt-2 font-bold text-green text-2xl dark:text-white/90">
                            87
                        </h3>
                        <span className="text-sm text-gray-400 dark:text-white-400">
                            completed Assignments                        
                        </span>
                        <Badge color={"success"} className="mt-2">78% AI-Assisted</Badge>
                    </div>
                    <div className="flex items-center justify-center w-8 h-8 bg-green rounded-4xl dark:bg-green"></div>
                </div>
            </div>
            <div className="rounded-2xl border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                <div className="flex justify-between">
                    <div className="w-[85%]">
                        <span className="text-md font-semibold text-black-700 dark:text-white-700">
                            Needs Review
                        </span>
                        <h3 className="mt-2 font-bold text-red text-2xl dark:text-white/90">
                            23
                        </h3>
                        <span className="text-sm text-gray-400 dark:text-white-400">
                            Manual review required
                        </span>
                        <Badge color={"error"} className="mt-2">High Priority</Badge>
                    </div>
                    <div className="flex items-center justify-center w-8 h-8 bg-red rounded-4xl dark:bg-red"></div>
                </div>
            </div>
            <div className="rounded-2xl border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                <div className="flex justify-between">
                    <div className="w-[85%]">
                        <span className="text-md font-semibold text-black-700 dark:text-white-700">
                            Average Score
                        </span>
                        <h3 className="mt-2 font-bold text-purple text-2xl dark:text-white/90">
                            77%
                        </h3>
                        <span className="text-sm text-gray-400 dark:text-white-400">
                            Current batch
                        </span>
                        <Badge color={"purple"} className="mt-2">+3% from last Batch</Badge>
                    </div>
                    <div className="flex items-center justify-center w-8 h-8 bg-purple rounded-4xl dark:bg-purple"></div>
                </div>
            </div>
        </div>
    );
}
