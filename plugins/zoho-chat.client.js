// plugins/zoho-chat.client.js
export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    window.$zoho = window.$zoho || {};
    window.$zoho.salesiq = window.$zoho.salesiq || { ready: function() {} };
    
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'zsiqscript';
    script.defer = true;
    script.src = 'https://salesiq.zohopublic.com/widget?plugin_source=wordpress&wc=siqb6706c4c65f1b07c5d4bc71ffa4fac00ece54cf61591073297a51c3a5f6bb597';
    
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);
  }
});