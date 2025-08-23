import { insertData, getData, putData, deleteData } from './helper';

// AI Question Generator API Service
export class QuestionGeneratorApiService {
  // Get available question patterns
  static async getQuestionPatterns() {
    try {
      return await getData('api/v1/ai-generator/patterns', true);
    } catch (error) {
      console.error('Error fetching question patterns:', error);
      throw error;
    }
  }

  // Generate questions from a pattern
  static async generateFromPattern(patternData: {
    pattern_id: string;
    subject: string;
    topic: string;
    difficulty_distribution: {
      easy: number;
      medium: number;
      hard: number;
    };
    total_questions: number;
    passing_score: number;
    duration: number;
  }) {
    try {
      return await insertData('api/v1/ai-generator/generate-from-pattern', patternData, true);
    } catch (error) {
      console.error('Error generating questions from pattern:', error);
      throw error;
    }
  }

  // Generate questions with custom pattern
  static async generateCustomPattern(customData: {
    subject: string;
    topic: string;
    difficulty_distribution: {
      easy: number;
      medium: number;
      hard: number;
    };
    total_questions: number;
    passing_score: number;
    duration: number;
    custom_instructions?: string;
  }) {
    try {
      return await insertData('api/v1/ai-generator/generate-custom-pattern', customData, true);
    } catch (error) {
      console.error('Error generating custom pattern questions:', error);
      throw error;
    }
  }

  // Upload document for question generation
  static async uploadDocumentForGeneration(file: File, metadata: {
    subject: string;
    topic: string;
    description?: string;
  }) {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('subject', metadata.subject);
      formData.append('topic', metadata.topic);
      if (metadata.description) {
        formData.append('description', metadata.description);
      }

      return await insertData('api/v1/ai-generator/upload-file', formData, true, undefined, true);
    } catch (error) {
      console.error('Error uploading document for generation:', error);
      throw error;
    }
  }

  // Get generation history
  static async getGenerationHistory(filters?: {
    subject?: string;
    topic?: string;
    date_from?: string;
    date_to?: string;
    status?: string;
  }) {
    try {
      const queryParams = filters ? new URLSearchParams(filters).toString() : '';
      const endpoint = queryParams ? `api/v1/ai-generator/generations?${queryParams}` : 'api/v1/ai-generator/generations';
      return await getData(endpoint, true);
    } catch (error) {
      console.error('Error fetching generation history:', error);
      throw error;
    }
  }

  // Get AI generation analytics for dashboard
  static async getGenerationAnalytics() {
    try {
      return await getData('api/v1/ai-generator/analytics/dashboard', true);
    } catch (error) {
      console.error('Error fetching generation analytics:', error);
      throw error;
    }
  }

  // Review generated questions with AI
  static async reviewQuestions(questionIds: string[]) {
    try {
      return await insertData('api/v1/ai-generator/review-questions', { question_ids: questionIds }, true);
    } catch (error) {
      console.error('Error reviewing questions:', error);
      throw error;
    }
  }

  // Save generated exam
  static async saveGeneratedExam(examData: {
    title: string;
    subject: string;
    topic: string;
    questions: any[];
    difficulty_distribution: {
      easy: number;
      medium: number;
      hard: number;
    };
    passing_score: number;
    duration: number;
    instructions?: string;
  }) {
    try {
      return await insertData('api/v1/exams/', examData, true);
    } catch (error) {
      console.error('Error saving generated exam:', error);
      throw error;
    }
  }
}
