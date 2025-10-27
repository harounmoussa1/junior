/**
 * Script de test pour vérifier la connexion Sanity
 * Exécutez ce fichier pour tester la configuration
 */

import { client } from './sanityClient';

export const testSanityConnection = async () => {
  console.log('🔍 Test de connexion Sanity...');
  
  try {
    // Test 1: Vérifier la connexion
    const result = await client.fetch('*[_type == "userOpinion"][0...1]');
    console.log('✅ Connexion Sanity réussie!');
    console.log(`📊 Nombre d'avis trouvés: ${result.length}`);
    
    // Test 2: Vérifier les avis approuvés
    const approvedCount = await client.fetch('count(*[_type == "userOpinion" && approved == true])');
    console.log(`✅ Avis approuvés: ${approvedCount}`);
    
    // Test 3: Vérifier les avis en attente
    const pendingCount = await client.fetch('count(*[_type == "userOpinion" && approved == false])');
    console.log(`⏳ Avis en attente: ${pendingCount}`);
    
    return {
      success: true,
      total: result.length,
      approved: approvedCount,
      pending: pendingCount
    };
  } catch (error) {
    console.error('❌ Erreur de connexion Sanity:', error);
    return {
      success: false,
      error
    };
  }
};

// Décommenter pour tester directement
// testSanityConnection();
