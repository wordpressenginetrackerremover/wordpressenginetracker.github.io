const calculateFileSize = ( textContent ) => {
    const size = new TextEncoder().encode( textContent ).length;
    const mbSize = Math.round( size ? size / 1024 / 1024 : 0 );
    return mbSize;
}

document.addEventListener( 'DOMContentLoaded', async () => {
    const allDomains = new Set();

    const setDownloadSizeEstimate = mb => {
        document.querySelector( '.download-button__content' ).textContent = mb ? `Download CSV (${ mb }MB)` : 'Download';
    }

    try {
      const response = await fetch( 'wpe_domains.csv' );

      if ( ! response.ok ) {
        throw new Error( 'Failed to fetch CSV file' );
      }
  
      const text = await response.text();
      const rows = text.split( '\n' );
  
      setDownloadSizeEstimate( calculateFileSize( text ) );    

      rows.map( row => row.trim() )
        .filter( row => row )
        .forEach( domain => allDomains.add( domain ) );
  
      console.log( `Loaded CSV with ${allDomains.size} domains` );
    } catch (error) {
      console.error( 'Error loading CSV: ', error );
    }
    
    const isHostedOnWPE = domain => allDomains.has( domain );

    const searchForm = document.querySelector( 'form#search-form' );
    searchForm.addEventListener( 'submit', event => {
      event.preventDefault();
      const domain = event.target.elements['domain'].value;
      
      if ( domain ) {
        console.log(
            isHostedOnWPE( domain ) ? 'Domain is in the set.' : 'Domain is not in the set.'
        );
      }

      return domain && isHostedOnWPE( domain );
    } );

} );