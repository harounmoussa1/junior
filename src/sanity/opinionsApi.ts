import { client } from './sanityClient';

// Interface pour les avis complets (depuis Sanity)
export interface Opinion {
  _id?: string;
  name: string;
  email?: string;
  avis: string;
  approved?: boolean;
  createdAt?: string;
}

// Interface pour la soumission d'un nouvel avis (champs partiels)
export interface OpinionInput {
  name: string;
  email: string;
  avis: string;
}

/**
 * Récupère tous les avis publics (depuis publicOpinion)
 */
export const getPublicOpinions = async (): Promise<Opinion[]> => {
  try {
    const query = `*[_type == "publicOpinion"] | order(publishedAt desc) {
      _id,
      name,
      avis,
      publishedAt
    }`;
    
    const opinions = await client.fetch(query);
    return opinions;
  } catch (error) {
    console.error('Erreur lors de la récupération des avis publics:', error);
    throw error;
  }
};

/**
 * Soumet un nouvel avis client directement dans publicOpinion
 */
export const submitOpinion = async (opinion: OpinionInput): Promise<Opinion> => {
  try {
    const newOpinion = {
      _type: 'publicOpinion',
      name: opinion.name,
      avis: opinion.avis,
      publishedAt: new Date().toISOString()
    };

    const result = await client.create(newOpinion);
    return result;
  } catch (error) {
    console.error('Erreur lors de la soumission de l\'avis:', error);
    throw error;
  }
};
