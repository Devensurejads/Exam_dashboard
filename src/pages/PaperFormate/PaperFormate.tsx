import { useState } from "react";
import PageMeta from "../../components/common/PageMeta";
import Button from "../../components/ui/button/Button";
import { EyeFullIcon, FileIcon, FileUploadIcon, GridIcon, LayoutIcon, RefreshIcon, TextIcon, UploadIcon } from "../../icons";
import Switch from "../../components/switch/Switch";

export default function PaperFormate() {
    const [step, setStep] = useState(1);

    const handleSwitchChange = (checked: boolean) => {
        console.log("Switch is now:", checked ? "ON" : "OFF");
    };

    return (
        <>
            <PageMeta
                title="IMS"
                description="IMS"
            />

            <div className="flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between">
                <div className="w-full">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white/90">
                        Question Paper Format Configurator
                    </h2>
                    <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
                        Design and customize your examination paper format
                    </p>
                </div>
                <div className="flex items-start w-full gap-3 sm:justify-end">
                    <div className="flex items-center gap-5">
                        <Button
                            size="sm"
                            variant="outline"
                            startIcon={<EyeFullIcon className="size-5" />}
                        >
                            Show Preview
                        </Button>
                        <Button
                            size="sm"
                            variant="primary"
                            startIcon={<FileUploadIcon className="size-5" />}
                        >
                            Save Template
                        </Button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-6 mt-4">
                {/* Left section */}
                <div className="col-span-12 xl:col-span-8">
                    <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] p-6">

                        {/* Exam Format Selection */}
                        <div className="flex items-center gap-2 mb-4">
                            <GridIcon className="size-5" />
                            <p className="text-lg font-semibold text-gray-800 dark:text-white">Template Library</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { title: "Standard University Format", tag: "Academic", sections: "4 Sections" },
                                { title: "Multiple Choice Only", tag: "Quiz", sections: "7 Sections" },
                                { title: "Mixed Format (MCQ + Essay)", tag: "Comprehensive", sections: "3 Sections" },
                                { title: "Practical Exam Format", tag: "Laboratory", sections: "5 Sections" }
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:shadow-md transition bg-gray-50 dark:bg-gray-900"
                                >
                                    <h3 className="font-semibold text-gray-800 dark:text-white">{item.title}</h3>
                                    <div className="flex items-center gap-4 text-sm mt-3">
                                        <Button size="sm" variant="outline">{item.tag}</Button>
                                        <p className="text-gray-600 dark:text-gray-400">{item.sections}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-2xl bg-gray-200 dark:border-gray-800 dark:bg-white/[0.03] p-3 mt-4">
                        <div className="flex items-center justify-between w-full">

                            {/* Step 1 */}
                            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setStep(1)}>
                                <div className={`${step === 1 ? 'rounded-2xl bg-white dark:bg-white/[0.03] p-3 w-max flex gap-2' : 'flex gap-2 p-3'}`}>
                                    <div className="flex items-center justify-center rounded-full">
                                        <TextIcon className="size-5" />
                                    </div>
                                    <div>
                                        <h3 className={`text-md font-medium ${step >= 1 ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                                            Header & Footer
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setStep(2)}>
                                <div className={`${step === 2 ? 'rounded-2xl bg-white dark:bg-white/[0.03] p-3 w-max flex gap-2' : 'flex gap-2 p-3'}`}>
                                    <div className="flex items-center justify-center rounded-full">
                                        <GridIcon className="size-5" />
                                    </div>
                                    <div>
                                        <h3 className={`text-md font-medium ${step >= 2 ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                                            Layout
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setStep(3)}>
                                <div className={`${step === 3 ? 'rounded-2xl bg-white dark:bg-white/[0.03] p-3 w-max flex gap-2' : 'flex gap-2 p-3'}`}>
                                    <div className="flex items-center justify-center rounded-full">
                                        <LayoutIcon className="size-5" />
                                    </div>
                                    <div>
                                        <h3 className={`text-md font-medium ${step >= 3 ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                                            Sections
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setStep(4)}>
                                <div className={`${step === 4 ? 'rounded-2xl bg-white dark:bg-white/[0.03] p-3 w-max flex gap-2' : 'flex gap-2 p-3'}`}>
                                    <div className="flex items-center justify-center rounded-full">
                                        <FileIcon className="size-5" />
                                    </div>
                                    <div>
                                        <h3 className={`text-md font-medium ${step >= 4 ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                                            Answer Sheet
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Step 1: Subject & Topics */}
                    <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] p-6 mt-4">
                        {step === 1 && (
                            <div>
                                <div className="space-y-5">
                                    <div>
                                        <label className="block text-gray-700 dark:text-gray-300 text-sm mb-2">
                                            Header Content
                                        </label>
                                        <textarea
                                            placeholder="University of Excellence"
                                            className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200 focus:outline-none resize-none"
                                        ></textarea>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 dark:text-gray-300 text-sm mb-2">
                                            Footer Content
                                        </label>
                                        <input
                                            placeholder="Page {page} of {total}"
                                            className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200 focus:outline-none resize-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 dark:text-gray-300 text-sm mb-2">
                                            Institution Logo
                                        </label>
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            startIcon={<UploadIcon className="size-5" />}
                                        >
                                            Upload Logo
                                        </Button>
                                    </div>

                                </div>
                            </div>
                        )}
                        {step === 2 && (
                            <div>
                                <div className="space-y-5">
                                    <div className="flex flex-wrap gap-4 mt-4">
                                        {/* Filter 1 */}
                                        <div className="flex flex-col flex-1 min-w-[200px]">
                                            <h3 className="mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">Paper Size</h3>
                                            <select className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200 focus:outline-none">
                                                <option>All Roles</option>
                                                <option>Active</option>
                                                <option>Inactive</option>
                                                <option>Completed</option>
                                            </select>
                                        </div>

                                        {/* Filter 2 */}
                                        <div className="flex flex-col flex-1 min-w-[200px]">
                                            <h3 className="mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">Font Family</h3>
                                            <select className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200 focus:outline-none">
                                                <option>All Roles</option>
                                                <option>Active</option>
                                                <option>Inactive</option>
                                                <option>Completed</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-4 mt-4">
                                        {/* Filter 1 */}
                                        <div className="flex flex-col flex-1 min-w-[200px]">
                                            <h3 className="mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">Question Numbering</h3>
                                            <select className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200 focus:outline-none">
                                                <option>All Roles</option>
                                                <option>Active</option>
                                                <option>Inactive</option>
                                                <option>Completed</option>
                                            </select>
                                        </div>

                                        {/* Filter 2 */}
                                        <div className="flex flex-col flex-1 min-w-[200px]">
                                            <h3 className="mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">Margin</h3>
                                            <select className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200 focus:outline-none">
                                                <option>All Roles</option>
                                                <option>Active</option>
                                                <option>Inactive</option>
                                                <option>Completed</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="flex text-center justify-between">
                                        <h3>Double-sided Printing</h3>
                                        <Switch
                                            defaultChecked={false}
                                            onChange={handleSwitchChange}
                                        />
                                    </div>
                                    <div className="flex text-center justify-between">
                                        <h3>Include student information box</h3>
                                        <Switch
                                            defaultChecked={true}
                                            onChange={handleSwitchChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                        {step === 3 && (
                            <div>
                                <div className="space-y-5">
                                    <div className="flex text-center justify-between">
                                        <h2 className="text-xl">Question Sections</h2>
                                        <Button size="sm" variant="outline" startIcon={<LayoutIcon className="size-5" />}>
                                            Add Section
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}
                        {step === 4 && (
                            <div>
                                <div className="space-y-5">
                                    <div className="flex flex-wrap gap-4 mt-4">
                                        {/* Filter 1 */}
                                        <div className="flex flex-col flex-1 min-w-[200px]">
                                            <h3 className="mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">Answer Sheet Format</h3>
                                            <select className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200 focus:outline-none">
                                                <option>All Roles</option>
                                                <option>Active</option>
                                                <option>Inactive</option>
                                                <option>Completed</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-4 mt-4">
                                        {/* Filter 1 */}
                                        <div className="flex flex-col flex-1 min-w-[200px]">
                                            <h3 className="mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">Bubble Size</h3>
                                            <select className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200 focus:outline-none">
                                                <option>All Roles</option>
                                                <option>Active</option>
                                                <option>Inactive</option>
                                                <option>Completed</option>
                                            </select>
                                        </div>

                                        {/* Filter 2 */}
                                        <div className="flex flex-col flex-1 min-w-[200px]">
                                            <h3 className="mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">Options per Question</h3>
                                            <select className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200 focus:outline-none">
                                                <option>All Roles</option>
                                                <option>Active</option>
                                                <option>Inactive</option>
                                                <option>Completed</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="flex text-center justify-between">
                                        <h3>Include instructions for marking</h3>
                                        <Switch
                                            defaultChecked={false}
                                            onChange={handleSwitchChange}
                                        />
                                    </div>
                                    <div className="flex text-center justify-between">
                                        <h3>Generate QR code for digital tracking</h3>
                                        <Switch
                                            defaultChecked={true}
                                            onChange={handleSwitchChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right section */}
                <div className="col-span-12 xl:col-span-4 space-y-6">
                    {/* Live Preview */}
                    <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] p-6">
                        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                            <EyeFullIcon className="size-5" /> Live Preview
                        </h2>
                        <div className="rounded-xl border border-gray-300 dark:border-gray-700 overflow-hidden">
                            <div className="p-4 bg-gray-50 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700 text-center font-medium">
                                University of Excellence Final Examination
                            </div>
                            <div className="divide-y divide-gray-300 dark:divide-gray-700">
                                <div className="p-4">
                                    <h3>1. Multiple Choice Question</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">20 Questions - 40 Marks</p>
                                </div>
                                <div className="p-4">
                                    <h3>2. Multiple Answer Question</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">5 Questions - 25 Marks</p>
                                </div>
                                <div className="p-4">
                                    <h3>3. Essay Questions</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">3 Questions - 35 Marks</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] p-6">
                        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Quick Actions</h2>
                        <div className="space-y-3">
                            <Button size="sm" variant="outline" className="w-full" startIcon={<RefreshIcon className="size-5" />}>
                                Reset to Default
                            </Button>
                            <Button size="sm" variant="outline" className="w-full" startIcon={<UploadIcon className="size-5" />}>
                                Import Template
                            </Button>
                            <Button size="sm" variant="outline" className="w-full" startIcon={<FileIcon className="size-5" />}>
                                Export as PDF
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                input[type="range"]::-webkit-slider-thumb {
                    appearance: none;
                    height: 20px;
                    width: 20px;
                    border-radius: 50%;
                    background: #3b82f6;
                    cursor: pointer;
                    border: 2px solid #ffffff;
                    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
                }
                
                input[type="range"]::-moz-range-thumb {
                    height: 20px;
                    width: 20px;
                    border-radius: 50%;
                    background: #3b82f6;
                    cursor: pointer;
                    border: 2px solid #ffffff;
                    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
                    border: none;
                }
                
                input[type="range"]:focus {
                    outline: none;
                }
                
                input[type="range"]:focus::-webkit-slider-thumb {
                    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
                }
                
                input[type="range"]:focus::-moz-range-thumb {
                    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
                }
            `}</style>
        </>
    );
}