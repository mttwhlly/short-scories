type Author = {
    name: string;
    url?: string;
    profileImage?: string;
  }
  
  type Tag = {
    name: string;
    description?: string;
    slug: string;
  }
  
  type Post = {
    title: string;
    url: string;
    content: string;
    date: string;
    primaryAuthor: Author;
    primaryTag: Tag;
    tags: Tag[];
    featureImage?: string;
  }