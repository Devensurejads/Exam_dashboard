import { insertData, getData, putData, deleteData } from './helper';

// Knowledge Base API Service
export class KnowledgeBaseApiService {
  // Upload document to knowledge base
  static async uploadDocument(file: File, metadata: {
    title: string;
    description?: string;
    subject: string;
    topic: string;
    tags?: string[];
    category?: string;
    author?: string;
    source_url?: string;
  }) {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('title', metadata.title);
      if (metadata.description) formData.append('description', metadata.description);
      formData.append('subject', metadata.subject);
      formData.append('topic', metadata.topic);
      if (metadata.tags) formData.append('tags', JSON.stringify(metadata.tags));
      if (metadata.category) formData.append('category', metadata.category);
      if (metadata.author) formData.append('author', metadata.author);
      if (metadata.source_url) formData.append('source_url', metadata.source_url);

      return await insertData('api/v1/knowledge/upload-document', formData, true, undefined, true);
    } catch (error) {
      console.error('Error uploading document:', error);
      throw error;
    }
  }

  // Get all knowledge sources
  static async getKnowledgeSources(filters?: {
    search?: string;
    subject?: string;
    topic?: string;
    category?: string;
    author?: string;
    date_from?: string;
    date_to?: string;
    page?: number;
    limit?: number;
  }) {
    try {
      const queryParams = filters ? new URLSearchParams(filters as any).toString() : '';
      const endpoint = queryParams ? `api/v1/knowledge/sources?${queryParams}` : 'api/v1/knowledge/sources';
      return await getData(endpoint, true);
    } catch (error) {
      console.error('Error fetching knowledge sources:', error);
      throw error;
    }
  }

  // Get specific knowledge source details
  static async getKnowledgeSource(sourceId: string) {
    try {
      return await getData(`api/v1/knowledge/sources/${sourceId}`, true);
    } catch (error) {
      console.error('Error fetching knowledge source details:', error);
      throw error;
    }
  }

  // Update knowledge source
  static async updateKnowledgeSource(sourceId: string, updateData: {
    title?: string;
    description?: string;
    subject?: string;
    topic?: string;
    tags?: string[];
    category?: string;
    author?: string;
    source_url?: string;
  }) {
    try {
      return await putData(`api/v1/knowledge/sources/${sourceId}`, updateData, true);
    } catch (error) {
      console.error('Error updating knowledge source:', error);
      throw error;
    }
  }

  // Delete knowledge source
  static async deleteKnowledgeSource(sourceId: string) {
    try {
      return await deleteData(`api/v1/knowledge/sources/${sourceId}`, true);
    } catch (error) {
      console.error('Error deleting knowledge source:', error);
      throw error;
    }
  }

  // Ingest content from URL
  static async ingestFromUrl(urlData: {
    url: string;
    title?: string;
    description?: string;
    subject: string;
    topic: string;
    tags?: string[];
    category?: string;
  }) {
    try {
      return await insertData('api/v1/knowledge/ingest-url', urlData, true);
    } catch (error) {
      console.error('Error ingesting from URL:', error);
      throw error;
    }
  }

  // Search knowledge base
  static async searchKnowledgeBase(searchQuery: string, filters?: {
    subject?: string;
    topic?: string;
    category?: string;
    date_from?: string;
    date_to?: string;
    file_type?: string;
    page?: number;
    limit?: number;
  }) {
    try {
      const searchParams = { query: searchQuery, ...filters };
      const queryParams = new URLSearchParams(searchParams as any).toString();
      return await getData(`api/v1/knowledge/search?${queryParams}`, true);
    } catch (error) {
      console.error('Error searching knowledge base:', error);
      throw error;
    }
  }

  // Get knowledge base statistics
  static async getKnowledgeStats() {
    try {
      return await getData('api/v1/knowledge/stats', true);
    } catch (error) {
      console.error('Error fetching knowledge base statistics:', error);
      throw error;
    }
  }

  // Get knowledge base categories
  static async getKnowledgeCategories() {
    try {
      return await getData('api/v1/knowledge/categories', true);
    } catch (error) {
      console.error('Error fetching knowledge categories:', error);
      throw error;
    }
  }

  // Create knowledge category
  static async createKnowledgeCategory(categoryData: {
    name: string;
    description?: string;
    parent_category_id?: string;
    color?: string;
  }) {
    try {
      return await insertData('api/v1/knowledge/categories', categoryData, true);
    } catch (error) {
      console.error('Error creating knowledge category:', error);
      throw error;
    }
  }

  // Update knowledge category
  static async updateKnowledgeCategory(categoryId: string, updateData: {
    name?: string;
    description?: string;
    parent_category_id?: string;
    color?: string;
  }) {
    try {
      return await putData(`api/v1/knowledge/categories/${categoryId}`, updateData, true);
    } catch (error) {
      console.error('Error updating knowledge category:', error);
      throw error;
    }
  }

  // Delete knowledge category
  static async deleteKnowledgeCategory(categoryId: string) {
    try {
      return await deleteData(`api/v1/knowledge/categories/${categoryId}`, true);
    } catch (error) {
      console.error('Error deleting knowledge category:', error);
      throw error;
    }
  }

  // Get document content
  static async getDocumentContent(sourceId: string) {
    try {
      return await getData(`api/v1/knowledge/sources/${sourceId}/content`, true);
    } catch (error) {
      console.error('Error fetching document content:', error);
      throw error;
    }
  }

  // Extract text from document
  static async extractTextFromDocument(sourceId: string) {
    try {
      return await getData(`api/v1/knowledge/sources/${sourceId}/extract-text`, true);
    } catch (error) {
      console.error('Error extracting text from document:', error);
      throw error;
    }
  }

  // Get document metadata
  static async getDocumentMetadata(sourceId: string) {
    try {
      return await getData(`api/v1/knowledge/sources/${sourceId}/metadata`, true);
    } catch (error) {
      console.error('Error fetching document metadata:', error);
      throw error;
    }
  }

  // Update document metadata
  static async updateDocumentMetadata(sourceId: string, metadata: {
    title?: string;
    description?: string;
    subject?: string;
    topic?: string;
    tags?: string[];
    category?: string;
    author?: string;
    source_url?: string;
  }) {
    try {
      return await putData(`api/v1/knowledge/sources/${sourceId}/metadata`, metadata, true);
    } catch (error) {
      console.error('Error updating document metadata:', error);
      throw error;
    }
  }

  // Get related documents
  static async getRelatedDocuments(sourceId: string, limit?: number) {
    try {
      const endpoint = limit ? `api/v1/knowledge/sources/${sourceId}/related?limit=${limit}` : `api/v1/knowledge/sources/${sourceId}/related`;
      return await getData(endpoint, true);
    } catch (error) {
      console.error('Error fetching related documents:', error);
      throw error;
    }
  }

  // Export knowledge base
  static async exportKnowledgeBase(format: 'json' | 'csv' | 'xml', filters?: {
    subject?: string;
    topic?: string;
    category?: string;
    date_from?: string;
    date_to?: string;
  }) {
    try {
      const exportParams = { format, ...filters };
      const queryParams = new URLSearchParams(exportParams as any).toString();
      return await getData(`api/v1/knowledge/export?${queryParams}`, true);
    } catch (error) {
      console.error('Error exporting knowledge base:', error);
      throw error;
    }
  }
}
