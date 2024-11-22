export type Note = {
    id: number;
    title: string;
    content1: {
        title: string;
        content: string;
    };
    content2: {
        title: string;
        content: string;
    };
    content3: {
        title: string;
        content: string;
    };
    createdAt: string;
    updatedAt: string;
    
    isArchive: boolean;
    tags: string[];
};