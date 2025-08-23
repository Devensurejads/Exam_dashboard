import { insertData, getData, putData, deleteData } from './helper';

// Paper Format API Service
export class PaperFormatApiService {
  // Create new paper format
  static async createPaperFormat(formatData: {
    name: string;
    description?: string;
    template_type: 'exam' | 'question_paper' | 'answer_sheet' | 'result_sheet';
    layout_settings: {
      page_size: 'A4' | 'A3' | 'Letter' | 'Legal';
      orientation: 'portrait' | 'landscape';
      margins: {
        top: number;
        bottom: number;
        left: number;
        right: number;
      };
      header_footer: {
        show_header: boolean;
        show_footer: boolean;
        header_text?: string;
        footer_text?: string;
      };
    };
    content_settings: {
      show_logo: boolean;
      logo_position?: 'top-left' | 'top-right' | 'top-center';
      show_institution_name: boolean;
      institution_name?: string;
      show_exam_title: boolean;
      show_student_info: boolean;
      show_instructions: boolean;
      show_page_numbers: boolean;
      question_numbering: 'continuous' | 'section-wise';
    };
    styling: {
      font_family: string;
      font_size: number;
      line_spacing: number;
      question_spacing: number;
      section_spacing: number;
      colors: {
        primary: string;
        secondary: string;
        accent: string;
        text: string;
        background: string;
      };
    };
  }) {
    try {
      return await insertData('api/v1/paper-formats/formats', formatData, true);
    } catch (error) {
      console.error('Error creating paper format:', error);
      throw error;
    }
  }

  // Get all paper formats
  static async getPaperFormats(filters?: {
    search?: string;
    template_type?: string;
    created_by?: string;
    date_from?: string;
    date_to?: string;
    page?: number;
    limit?: number;
  }) {
    try {
      const queryParams = filters ? new URLSearchParams(filters as any).toString() : '';
      const endpoint = queryParams ? `api/v1/paper-formats/formats?${queryParams}` : 'api/v1/paper-formats/formats';
      return await getData(endpoint, true);
    } catch (error) {
      console.error('Error fetching paper formats:', error);
      throw error;
    }
  }

  // Get specific paper format
  static async getPaperFormat(formatId: string) {
    try {
      return await getData(`api/v1/paper-formats/formats/${formatId}`, true);
    } catch (error) {
      console.error('Error fetching paper format:', error);
      throw error;
    }
  }

  // Update paper format
  static async updatePaperFormat(formatId: string, updateData: {
    name?: string;
    description?: string;
    layout_settings?: {
      page_size?: 'A4' | 'A3' | 'Letter' | 'Legal';
      orientation?: 'portrait' | 'landscape';
      margins?: {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
      };
      header_footer?: {
        show_header?: boolean;
        show_footer?: boolean;
        header_text?: string;
        footer_text?: string;
      };
    };
    content_settings?: {
      show_logo?: boolean;
      logo_position?: 'top-left' | 'top-right' | 'top-center';
      show_institution_name?: boolean;
      institution_name?: string;
      show_exam_title?: boolean;
      show_student_info?: boolean;
      show_instructions?: boolean;
      show_page_numbers?: boolean;
      question_numbering?: 'continuous' | 'section-wise';
    };
    styling?: {
      font_family?: string;
      font_size?: number;
      line_spacing?: number;
      question_spacing?: number;
      section_spacing?: number;
      colors?: {
        primary?: string;
        secondary?: string;
        accent?: string;
        text?: string;
        background?: string;
      };
    };
  }) {
    try {
      return await putData(`api/v1/paper-formats/formats/${formatId}`, updateData, true);
    } catch (error) {
      console.error('Error updating paper format:', error);
      throw error;
    }
  }

  // Delete paper format
  static async deletePaperFormat(formatId: string) {
    try {
      return await deleteData(`api/v1/paper-formats/formats/${formatId}`, true);
    } catch (error) {
      console.error('Error deleting paper format:', error);
      throw error;
    }
  }

  // Preview paper format
  static async previewPaperFormat(formatId: string, previewData?: {
    sample_content?: boolean;
    sample_questions?: boolean;
    sample_student_info?: boolean;
  }) {
    try {
      const endpoint = previewData ? `api/v1/paper-formats/preview/${formatId}` : `api/v1/paper-formats/preview/${formatId}`;
      const data = previewData || {};
      return await insertData(endpoint, data, true);
    } catch (error) {
      console.error('Error previewing paper format:', error);
      throw error;
    }
  }

  // Generate paper using format
  static async generatePaper(formatId: string, examData: {
    exam_id: string;
    student_ids?: string[];
    include_answers?: boolean;
    include_marks?: boolean;
    custom_header?: string;
    custom_footer?: string;
  }) {
    try {
      return await insertData(`api/v1/paper-formats/formats/${formatId}/generate`, examData, true);
    } catch (error) {
      console.error('Error generating paper:', error);
      throw error;
    }
  }

  // Get paper format templates
  static async getPaperFormatTemplates() {
    try {
      return await getData('api/v1/paper-formats/templates', true);
    } catch (error) {
      console.error('Error fetching paper format templates:', error);
      throw error;
    }
  }

  // Create paper format from template
  static async createPaperFormatFromTemplate(templateId: string, formatData: {
    name: string;
    description?: string;
    customizations?: {
      layout_settings?: any;
      content_settings?: any;
      styling?: any;
    };
  }) {
    try {
      return await insertData(`api/v1/paper-formats/templates/${templateId}/create`, formatData, true);
    } catch (error) {
      console.error('Error creating paper format from template:', error);
      throw error;
    }
  }

  // Duplicate paper format
  static async duplicatePaperFormat(formatId: string, newName: string) {
    try {
      return await insertData(`api/v1/paper-formats/formats/${formatId}/duplicate`, { new_name: newName }, true);
    } catch (error) {
      console.error('Error duplicating paper format:', error);
      throw error;
    }
  }

  // Export paper format
  static async exportPaperFormat(formatId: string, format: 'json' | 'xml' | 'yaml') {
    try {
      return await getData(`api/v1/paper-formats/formats/${formatId}/export?format=${format}`, true);
    } catch (error) {
      console.error('Error exporting paper format:', error);
      throw error;
    }
  }

  // Import paper format
  static async importPaperFormat(file: File, importSettings?: {
    overwrite_existing?: boolean;
    validate_only?: boolean;
  }) {
    try {
      const formData = new FormData();
      formData.append('file', file);
      if (importSettings) {
        formData.append('overwrite_existing', String(importSettings.overwrite_existing || false));
        formData.append('validate_only', String(importSettings.validate_only || false));
      }

      return await insertData('api/v1/paper-formats/import', formData, true, undefined, true);
    } catch (error) {
      console.error('Error importing paper format:', error);
      throw error;
    }
  }

  // Validate paper format
  static async validatePaperFormat(formatId: string) {
    try {
      return await getData(`api/v1/paper-formats/formats/${formatId}/validate`, true);
    } catch (error) {
      console.error('Error validating paper format:', error);
      throw error;
    }
  }

  // Get paper format usage statistics
  static async getPaperFormatStats(formatId?: string) {
    try {
      const endpoint = formatId ? `api/v1/paper-formats/stats/${formatId}` : 'api/v1/paper-formats/stats';
      return await getData(endpoint, true);
    } catch (error) {
      console.error('Error fetching paper format statistics:', error);
      throw error;
    }
  }

  // Set default paper format
  static async setDefaultPaperFormat(formatId: string, formatType: string) {
    try {
      return await putData(`api/v1/paper-formats/formats/${formatId}/set-default`, { format_type: formatType }, true);
    } catch (error) {
      console.error('Error setting default paper format:', error);
      throw error;
    }
  }

  // Get default paper formats
  static async getDefaultPaperFormats() {
    try {
      return await getData('api/v1/paper-formats/defaults', true);
    } catch (error) {
      console.error('Error fetching default paper formats:', error);
      throw error;
    }
  }
}
