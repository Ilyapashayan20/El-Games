module.exports = {
  content: [],
  theme: {
    screens: {
     
      'md': [{'max': '960px' }],
      'mdd': [{'max': '800px' }],
      'smm': [{'max': '629px' }],
      'smn': [{'max': '560px' }],
      'lg': [{'max': '1440px' }],
      'lm': [{'max': '1150px' }],
      'l': [{'max': '476px' }],
      's': [{'max': '360px' }],
    },
   
      fontSize: {
        sm: ['16px', '28px'],
        base: ['23px', '29px'],
        lg: ['29px', '28px'],
        xl: ['39px', '36px'],
        xxl: ['66px', '93px'],
        section:['36px','54px'],
        p:['16px','150%'],
        
    },
  
  
    borderRadius: {
      'none': '0',
      'smm': '2.6rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      '3xl': '24px',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '24px',
    },
    extend: {
      zIndex: {
        minus: ['-1'],
        ziro: ['0']
      },
      inset: {
        '720px': '720px',
      },
      width: {
        '114': '29.5rem',
        '110px':'110px',
        
      },
      height:{
        '100': '500px'
      },
      maxWidth: {
        'lgg': '20rem',
        'game-stors': '15rem',
        'slide': '18rem',
      },
      colors: {
        'blue-a': '#1B2A47',
        'orange': '#F03E1D',
        'facebook': '#1877F2',
        'youtube': '#FF0000',
        'instagarm': '#F00073',
        'blue-menu': '#1D2840',
      },
      
    },
  },
  plugins: [],
}
