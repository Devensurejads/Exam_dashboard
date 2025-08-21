import React, { useState } from 'react';
import PageMeta from '../../components/common/PageMeta';
import { FileIcon, ImportIcon, LinkIcon, UploadIcon } from '../../icons';
import Button from '../../components/ui/button/Button';

interface UploadedFile {
  file: File;
  id: string;
}

const KnowledgeBase: React.FC = () => {
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  const allowedFileTypes = ['.pdf', '.doc', '.docx', '.txt'] as const;
  const maxFileSize = 50 * 1024 * 1024; // 50MB in bytes

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);

    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const isValidFileType = (fileName: string): boolean => {
    const fileExtension = ('.' + fileName.split('.').pop()?.toLowerCase()) as typeof allowedFileTypes[number];
    return allowedFileTypes.includes(fileExtension);
  };

  const isValidFileSize = (fileSize: number): boolean => {
    return fileSize <= maxFileSize;
  };

  const handleFiles = (files: File[]): void => {
    const validFiles = files.filter(file => {
      return isValidFileType(file.name) && isValidFileSize(file.size);
    });

    const newUploadedFiles: UploadedFile[] = validFiles.map(file => ({
      file,
      id: `${file.name}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    }));

    setUploadedFiles(prev => [...prev, ...newUploadedFiles]);
    console.log('Files uploaded:', validFiles);
  };

  const handleChooseFiles = (): void => {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.accept = allowedFileTypes.join(',');
    input.onchange = handleNativeFileSelect;
    input.click();
  };

  const handleNativeFileSelect = (e: Event): void => {
    const target = e.target as HTMLInputElement;
    if (target.files) {
      const files = Array.from(target.files);
      handleFiles(files);
    }
  };


  const removeFile = (fileId: string): void => {
    setUploadedFiles(prev => prev.filter(uploadedFile => uploadedFile.id !== fileId));
  };

  const formatFileSize = (bytes: number): string => {
    return (bytes / 1024 / 1024).toFixed(2);
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
            Knowledge Base Management
          </h2>
          <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
            Upload and manage content sources for AI-powered question generation
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-white/[0.03] rounded-2xl border border-gray-200 dark:border-gray-800 p-6 flex flex-col">
              <div className="flex gap-4 mb-6">
                <UploadIcon className="w-6 h-6 text-gray-700 dark:text-white/90" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">Upload Documents</h3>
              </div>

              <div
                className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors cursor-pointer ${isDragOver
                  ? 'border-blue-400 bg-blue-100/50'
                  : 'border-blue-300 bg-blue-50/30 hover:bg-blue-50/50'
                  }`}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={handleChooseFiles}
              >
                <div className="mb-6">
                  <UploadIcon className="w-12 h-12 mx-auto text-black-700 dark:text-white/90" />
                </div>

                <h3 className="text-lg font-medium text-gray-700 mb-4">
                  Drag & drop files here
                </h3>

                <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                  Support for PDF, DOC, DOCX, TXT files up to 50MB
                </p>

                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-lg border border-gray-300 transition-colors font-medium">
                  Choose Files
                </button>
              </div>

              {/* Display uploaded files */}
              {uploadedFiles.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    Uploaded Files ({uploadedFiles.length}):
                  </h4>
                  <div className="space-y-2">
                    {uploadedFiles.map((uploadedFile) => (
                      <div key={uploadedFile.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                            <FileIcon className="w-5 h-5 text-primary dark:text-white/90" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{uploadedFile.file.name}</p>
                            <p className="text-xs text-gray-500">{formatFileSize(uploadedFile.file.size)} MB</p>
                          </div>
                        </div>
                        <button
                          className="text-red-500 hover:text-red-700 text-sm transition-colors"
                          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                            e.stopPropagation();
                            removeFile(uploadedFile.id);
                          }}
                          type="button"
                          aria-label={`Remove ${uploadedFile.file.name}`}
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="bg-white dark:bg-white/[0.03] rounded-2xl border border-gray-200 dark:border-gray-800 p-6 flex flex-col">
              {/* Header */}
              <div className="flex gap-4 mb-6 items-center">
                <LinkIcon className="w-6 h-6 text-gray-700 dark:text-white/90" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">URL Ingestion</h3>
              </div>

              {/* URL */}
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Website URL or API Endpoint</h3>
              <div className="hidden md:block py-3 px-4 bg-gray-50 dark:bg-gray-900 rounded-lg mt-2">
                <p className="text-sm font-medium truncate">https://example.com/knowledge-base</p>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-4 mt-4">
                {/* Filter 1 */}
                <div className="flex flex-col flex-1 min-w-[200px]">
                  <h3 className="mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">Content Type</h3>
                  <select className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200 focus:outline-none">
                    <option>All Roles</option>
                    <option>Active</option>
                    <option>Inactive</option>
                    <option>Completed</option>
                  </select>
                </div>

                {/* Filter 2 */}
                <div className="flex flex-col flex-1 min-w-[200px]">
                  <h3 className="mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">Category</h3>
                  <select className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200 focus:outline-none">
                    <option>All Roles</option>
                    <option>Active</option>
                    <option>Inactive</option>
                    <option>Completed</option>
                  </select>
                </div>
              </div>
              <Button
                size="sm"
                variant="primary"
                className='mt-4'
                startIcon={<ImportIcon className="size-5" />}
              >
                Ingest From URL
              </Button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default KnowledgeBase;