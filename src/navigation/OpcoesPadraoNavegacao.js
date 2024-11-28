import React from 'react';
import FlechaNavegacao from './FlechaNavegacao';

export const opcoesPadraoNavegacao = (navigation) => ({
    // configurações padrão para flecha de navegação para voltar das telas

    //TODO: possíbilidade de passar a ação por props, para poder fazer mais do que só voltar das telas

    tabBarStyle: { display: 'none' },
    headerShown: true,
    headerTitle: "",  
    headerStyle: {
      elevation: 0,   
      height: 80,    
    },
    headerLeft: () => (
      <FlechaNavegacao acao={() => navigation.goBack()} />  
    ),
  });
  