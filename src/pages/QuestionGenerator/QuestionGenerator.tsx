import { useState } from "react";
import PageMeta from "../../components/common/PageMeta";
import Button from "../../components/ui/button/Button";
import { FileUploadIcon } from "../../icons";

export default function QuestionGenerator() {
    const [step, setStep] = useState(1);
    const [passingScore, setPassingScore] = useState(40);
    const [duration, setDuration] = useState(90);
    // type Difficulty = keyof typeof values;

    // Add difficulty distribution state
    const [values, setValues] = useState({
        easy: 30,
        medium: 50,
        hard: 20
    });

    type Difficulty = 'easy' | 'medium' | 'hard';

    const sliderConfig: { key: Difficulty; label: string; color: string }[] = [
        { key: 'easy', label: 'Easy', color: 'text-green-600' },
        { key: 'medium', label: 'Medium', color: 'text-yellow-600' },
        { key: 'hard', label: 'Hard', color: 'text-red-600' }
    ];

    // Add step navigation functions
    const handleNextStep = () => {
        if (step < 4) {
            setStep(step + 1);
        }
    };

    const handlePreviousStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    // Add slider change handler
    const handleSliderChange = (type: Difficulty, newValue: number) => {
        const remainingValue = 100 - newValue;
        const otherTypes = (Object.keys(values) as Difficulty[]).filter(key => key !== type);

        const currentSum = otherTypes.reduce((sum, key) => sum + values[key], 0);

        if (currentSum > 0) {
            const newValues = { ...values, [type]: newValue };

            let distributed = 0;
            otherTypes.forEach((key, index) => {
                if (index === otherTypes.length - 1) {
                    newValues[key] = remainingValue - distributed;
                } else {
                    const proportion = values[key] / currentSum;
                    const newVal = Math.round(remainingValue * proportion);
                    newValues[key] = newVal;
                    distributed += newVal;
                }
            });

            setValues(newValues);
        } else {
            const equalValue = Math.floor(remainingValue / otherTypes.length);
            const remainder = remainingValue % otherTypes.length;

            const newValues = { ...values, [type]: newValue };
            otherTypes.forEach((key, index) => {
                newValues[key] = equalValue + (index < remainder ? 1 : 0);
            });

            setValues(newValues);
        }
    };

    const increment = () => {
        setDuration(prev => prev + 1);
    };

    const decrement = () => {
        setDuration(prev => Math.max(1, prev - 1));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value >= 1) {
            setDuration(value);
        }
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
                        AI-Powered Question Generator
                    </h2>
                    <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
                        Create comprehensive exams with intelligent AI assistance
                    </p>
                </div>
                <div className="flex items-start w-full gap-3 sm:justify-end">
                    <div className="flex items-center gap-5">
                        <Button
                            size="sm"
                            variant="primary"
                            startIcon={<FileUploadIcon className="size-5" />}
                        >
                            Upload PDF
                        </Button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-4 md:gap-6">
                <div className="col-span-12 xl:col-span-12">
                    <div className="rounded-2xl border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center space-x-3 flex-1">
                                <div className={`flex items-center justify-center w-12 h-12 rounded-full ${step === 1 ? 'bg-blue-500' : step > 1 ? 'bg-green-500' : 'border-2 border-gray-200 dark:bg-gray-800 dark:border-gray-700'
                                    }`}>
                                    <svg className={`w-6 h-6 ${step === 1 || step > 1 ? 'text-white' : 'text-gray-400 dark:text-gray-500'
                                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className={`text-md font-medium ${step === 1 || step > 1 ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>Subject & Topics</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Step 1</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3 flex-1">
                                <div className={`flex items-center justify-center w-12 h-12 rounded-full ${step === 2 ? 'bg-blue-500' : step > 2 ? 'bg-green-500' : 'border-2 border-gray-200 dark:bg-gray-800 dark:border-gray-700'
                                    }`}>
                                    <svg className={`w-6 h-6 ${step === 2 || step > 2 ? 'text-white' : 'text-gray-400 dark:text-gray-500'
                                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className={`text-md font-medium ${step === 2 || step > 2 ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>Requirements</h3>
                                    <p className="text-sm text-gray-400 dark:text-gray-500">Step 2</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3 flex-1">
                                <div className={`flex items-center justify-center w-12 h-12 rounded-full ${step === 3 ? 'bg-blue-500' : step > 3 ? 'bg-green-500' : 'border-2 border-gray-200 dark:bg-gray-800 dark:border-gray-700'
                                    }`}>
                                    <svg className={`w-6 h-6 ${step === 3 || step > 3 ? 'text-white' : 'text-gray-400 dark:text-gray-500'
                                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className={`text-md font-medium ${step === 3 || step > 3 ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>AI Preview</h3>
                                    <p className="text-sm text-gray-400 dark:text-gray-500">Step 3</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3 flex-1">
                                <div className={`flex items-center justify-center w-12 h-12 rounded-full ${step === 4 ? 'bg-blue-500' : 'border-2 border-gray-200 dark:bg-gray-800 dark:border-gray-700'
                                    }`}>
                                    <svg className={`w-6 h-6 ${step === 4 ? 'text-white' : 'text-gray-400 dark:text-gray-500'
                                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className={`text-md font-medium ${step === 4 ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>Customize</h3>
                                    <p className="text-sm text-gray-400 dark:text-gray-500">Step 4</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-12 gap-4 md:gap-6 mt-4">
                {step == 1 && (
                    <div className="col-span-12 xl:col-span-8">
                        <div className="rounded-2xl border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                            <div className="mb-5">
                                <span className="text-xl text-black-700 dark:text-white-700">
                                    Subject & Topics
                                </span>
                            </div>
                            <div className="space-y-1 mb-3">
                                <label className="block text-md font-medium text-gray-700 dark:text-gray-200 mb-2">
                                    Subject
                                </label>
                                <div className="relative">
                                    <select className="w-full appearance-none bg-gray-100 dark:bg-gray-700 border-0 rounded-lg px-4 py-2 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-gray-600 transition-colors">
                                        <option>Select Subject</option>
                                        <option>Mathematics</option>
                                        <option>Science</option>
                                        <option>English</option>
                                        <option>History</option>
                                        <option>Geography</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-1 mb-3">
                                <label className="block text-md font-medium text-gray-700 dark:text-gray-200 mb-2">
                                    Select Topics
                                </label>
                                <div className="relative">
                                    <select className="w-full appearance-none bg-gray-100 dark:bg-gray-700 border-0 rounded-lg px-4 py-2 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-gray-600 transition-colors">
                                        <option>Select Topics</option>
                                        <option>Topic 1</option>
                                        <option>Topic 2</option>
                                        <option>Topic 3</option>
                                        <option>Topic 4</option>
                                        <option>Topic 5</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="block text-md font-medium text-gray-700 dark:text-gray-200 mb-2">
                                    Select Page Number
                                </label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        placeholder="Enter Number"
                                        className="w-full bg-gray-100 dark:bg-gray-700 border-0 rounded-lg px-4 py-2 text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-gray-600 transition-colors"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                )}
                {step == 2 && (
                    <div className="col-span-12 xl:col-span-8">
                        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                            <div className="mb-5">
                                <span className="text-xl text-gray-700 dark:text-white">
                                    Define Paper Requirements
                                </span>
                            </div>
                            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
                                <div className="mb-5">
                                    <span className="text-lg font-semibold text-gray-700 dark:text-white">
                                        Difficulty Distribution
                                    </span>
                                </div>
                                <div className="space-y-6">
                                    {sliderConfig.map(({ key, label, color }) => (
                                        <div key={key} className="space-y-3">
                                            {/* Label and Percentage */}
                                            <div className="flex items-center justify-between">
                                                <span className={`text-base font-medium ${color}`}>{label}</span>
                                                <span className="text-lg font-semibold text-teal-500">{values[key]}%</span>
                                            </div>

                                            <div className="relative">
                                                <input
                                                    type="range"
                                                    min="0"
                                                    max="100"
                                                    value={values[key]}
                                                    onChange={(e) => handleSliderChange(key, parseInt(e.target.value))}
                                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                                    style={{
                                                        background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${values[key]}%, #e5e7eb ${values[key]}%, #e5e7eb 100%)`
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Total Display */}
                                <div className="mt-6 pt-4 border-t border-gray-200">
                                    <div className="flex items-center justify-between">
                                        <span className="text-base font-medium text-gray-700 dark:text-gray-300">Total</span>
                                        <span className="text-lg font-semibold text-gray-800 dark:text-white">
                                            {Object.values(values).reduce((sum, val) => sum + val, 0)}%
                                        </span>
                                    </div>
                                </div>

                                {/* Visual Summary */}
                                <div className="mt-4">
                                    <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden flex">
                                        <div
                                            className="h-full bg-green-500 transition-all duration-300"
                                            style={{ width: `${values.easy}%` }}
                                        ></div>
                                        <div
                                            className="h-full bg-yellow-500 transition-all duration-300"
                                            style={{ width: `${values.medium}%` }}
                                        ></div>
                                        <div
                                            className="h-full bg-red-500 transition-all duration-300"
                                            style={{ width: `${values.hard}%` }}
                                        ></div>
                                    </div>
                                    <div className="flex justify-between mt-2 text-xs text-gray-500">
                                        <span>Easy</span>
                                        <span>Medium</span>
                                        <span>Hard</span>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03] mt-4">
                                <div className="mb-5">
                                    <span className="text-lg font-semibold text-gray-700 dark:text-white">
                                        Passing Score
                                    </span>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div className="w-[90%]">
                                            <input
                                                type="range"
                                                min="0"
                                                max="100"
                                                value={passingScore}
                                                onChange={(e) => setPassingScore(parseInt(e.target.value))}
                                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                                style={{
                                                    background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${passingScore}%, #e5e7eb ${passingScore}%, #e5e7eb 100%)`
                                                }}
                                            />
                                        </div>
                                        <span className="text-xl font-semibold text-teal-500 pl-2">{passingScore}%</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mx-auto pt-6 bg-white ">
                                <div className="flex items-center justify-between">
                                    <label className="text-lg font-medium text-gray-700">
                                        Exam Duration In Minutes
                                    </label>

                                    <div className="flex items-center space-x-1">
                                        <button
                                            onClick={decrement}
                                            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-colors"
                                            aria-label="Decrease duration"
                                        >
                                            <span className="w-4 h-6 text-gray-600">-</span>
                                        </button>

                                        <input
                                            type="text"
                                            value={duration}
                                            onChange={handleInputChange}
                                            min="1"
                                            className="w-16 text-center text-lg font-semibold bg-transparent border-none outline-none"
                                            aria-label="Exam duration in minutes"
                                        />

                                        <button
                                            onClick={increment}
                                            className="w-8 h-7 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-colors"
                                            aria-label="Increase duration"
                                        >
                                            <span className="w-8 h-6 text-gray-600">+</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {step == 3 && (
                    <div className="col-span-12 xl:col-span-8">
                        <div className="rounded-2xl border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                            <div className="mb-5">
                                <span className="text-xl text-black-700 dark:text-white-700">
                                    AI Preview
                                </span>
                            </div>
                            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <p className="text-gray-600 dark:text-gray-300">
                                    AI will generate a preview of your exam based on the settings configured in previous steps.
                                    This step will show you sample questions and allow you to make adjustments before finalizing.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
                {step == 4 && (
                    <div className="col-span-12 xl:col-span-8">
                        <div className="rounded-2xl border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                            <div className="mb-5">
                                <span className="text-xl text-black-700 dark:text-white-700">
                                    Final Layout Customization
                                </span>
                            </div>
                            <div className="space-y-1">
                                <label className="block text-md font-medium text-gray-700 dark:text-gray-200 mb-2">
                                    Exam Instructions
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Enter instructions for students..."
                                        className="w-full bg-gray-100 dark:bg-gray-700 border-0 rounded-lg px-4 py-2 text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-gray-600 transition-colors"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-4 mt-4">
                                <div className="space-y-1 flex-1">
                                    <label className="block text-md font-medium text-gray-700 dark:text-gray-200 mb-2">
                                        Instructor Name
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Enter instructor name"
                                            className="w-full bg-gray-100 dark:bg-gray-700 border-0 rounded-lg px-4 py-2 text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-gray-600 transition-colors"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1 flex-1">
                                    <label className="block text-md font-medium text-gray-700 dark:text-gray-200 mb-2">
                                        Course Code
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="eg., CS123"
                                            className="w-full bg-gray-100 dark:bg-gray-700 border-0 rounded-lg px-4 py-2 text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-gray-600 transition-colors"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-1 mt-4">
                                <label className="block text-md font-medium text-gray-700 dark:text-gray-200 mb-2">
                                    Additional Options
                                </label>
                                <div className="space-y-2 grid">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox h-4 w-4 text-blue-600"
                                        />
                                        <span className="ml-2 text-gray-700 dark:text-gray-300">Show Marks for Each Question</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox h-4 w-4 text-blue-600"
                                        />
                                        <span className="ml-2 text-gray-700 dark:text-gray-300">Generate Answer Key</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox h-4 w-4 text-blue-600"
                                        />
                                        <span className="ml-2 text-gray-700 dark:text-gray-300">Create Multiple Versions</span>
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>
                )}
                <div className="col-span-12 xl:col-span-4">
                    <div className="rounded-2xl border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                        <div className="mb-5">
                            <span className="text-xl text-black-700 dark:text-white-700">
                                Generation Progress
                            </span>
                        </div>
                        <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-base text-gray-700 dark:text-white/90">Completion</span>
                                <span className="text-black font-semibold">{step * 25}%</span>
                            </div>
                            <div className="w-full h-3 bg-gray-200 rounded-full">
                                <div className="h-3 bg-blue-600 rounded-full" style={{ width: `${step * 25}%` }}></div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-base text-gray-700 dark:text-white/90 font-semibold">Subject:</span>
                                <span className="text-black dark:text-white">Computer Science</span>
                            </div>
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-base text-gray-700 dark:text-white/90 font-semibold">Questions:</span>
                                <span className="text-black dark:text-white">0</span>
                            </div>
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-base text-gray-700 dark:text-white/90 font-semibold">Duration:</span>
                                <span className="text-black dark:text-white">{duration} min</span>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-2xl border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 mt-4">
                        <div className="mb-5">
                            <span className="text-xl text-black-700 dark:text-white-700">
                                AI Tips
                            </span>
                        </div>
                        <div className="flex items-center justify-between p-5 border border-gray-200 rounded-xl">
                            <div className="flex items-center gap-3">
                                <div>
                                    <div className="font-semibold text-purple dark:text-purple">Balanced Difficulty</div>
                                    <div className="text-sm text-purple dark:text-purple mt-2">Mix easy, medium, and hard questions for comprehensive assessment.</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-5 border border-gray-200 rounded-xl mt-2">
                            <div className="flex items-center gap-3">
                                <div>
                                    <div className="font-semibold text-primary dark:text-primary">Question Variety</div>
                                    <div className="text-sm text-primary dark:text-primary mt-2">Include different question types to test various cognitive skills.</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-5 border border-gray-200 rounded-xl mt-2">
                            <div className="flex items-center gap-3">
                                <div>
                                    <div className="font-semibold text-green dark:text-green">Clear Instructions</div>
                                    <div className="text-sm text-green dark:text-green mt-2">Provide clear, concise instructions to avoid student confusion.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-4 md:gap-6 mt-4">
                <div className="col-span-12 xl:col-span-12">
                    <div className="rounded-2xl border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                        <div className="flex items-center justify-between">
                            <Button
                                size="sm"
                                variant="outline"
                                onClick={handlePreviousStep}
                                disabled={step === 1}
                            >
                                Previous
                            </Button>
                            <Button
                                size="sm"
                                variant="primary"
                                startIcon={<FileUploadIcon className="size-5" />}
                                onClick={handleNextStep}
                            >
                                {step === 4 ? 'Generate Exam' : 'Save & Continue'}
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