const rootFontSize = (document.querySelector('html') as HTMLHtmlElement).style.fontSize || '50px'
const rootFontSizeNumber = parseFloat(rootFontSize)


export const px2rem = (px: string) :string | number => {
    const rem = parseFloat(px) / rootFontSizeNumber
    return rem + 'rem'
}

export const rem2px = (rem:string, needNumber = false): number => {
    const px = parseFloat(rem) * rootFontSizeNumber
    return px
}



export const loadScript = (pkgCdn: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      const target =
        document.getElementsByTagName("script")[0] || document.head;
      script.type = "text/javascript";
      script.src = pkgCdn;
      script.onload = function(){
        // console.log(this)
        resolve()
      };
      script.onerror = reject;
      if (target && target.parentNode)
        target.parentNode.insertBefore(script, target);
    });
  };