// Export centralisé pour tous les modules Sanity
export { client } from './sanityClient';
export { 
  getPublicOpinions,
  submitOpinion, 
  type Opinion,
  type OpinionInput
} from './opinionsApi';
export { testSanityConnection } from './testConnection';
