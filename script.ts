class SistemaSeguranca {
    private static instancia: SistemaSeguranca | null = null;
    private senhaBaseSecreta: string = 'senhaDaBaseSoftex';
  
    private constructor() {}
  
    static getInstance(): SistemaSeguranca {
      if (!SistemaSeguranca.instancia) {
        SistemaSeguranca.instancia = new SistemaSeguranca();
      }
      return SistemaSeguranca.instancia;
    }
  
    acessarBaseSecreta(senha: string): void {
      if (senha === this.senhaBaseSecreta) {
        console.log('Acesso concedido à Base Secreta. Bem-vindo, agente!');
      } else {
        console.log('Acesso negado. Senha incorreta. Intruso identificado!');
      }
    }
  }
  
  const sistemaSeguranca = SistemaSeguranca.getInstance();
  
  // Agente tentando acessar a Base Secreta
  const senhaInserida = 'senhaDaBaseSoftex';
  
  sistemaSeguranca.acessarBaseSecreta(senhaInserida);


  