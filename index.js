const fetchSitesData = async () => {
  return false;
}

const calculateFileSize = ( textContent ) => {
  return false;
}

const fetchSitesCount = async () => {
  return false;
}

const formatNumber = ( number, shouldHaveDecimals = true ) => {
  if ( ! number ) {
    return '';
  }

  const roundedNumber = Math.ceil( number / 10 ) * 10;

  if ( number < 100000 ) {
    return roundedNumber.toLocaleString();
  }

  const numberString = Math.floor( roundedNumber / 1000 ).toLocaleString();
  const decimalString = Math.floor( ( roundedNumber % 1000 ) / 100 );

  if ( shouldHaveDecimals ) {
    return `${ numberString }.${ decimalString}K`;
  }

  return `${ numberString }K`;
}

function triggerRecentlyMovedAnimation() {
  return false;
}

function getTimeSinceMoved(date) {
  return false;
}

function initRecentlyMoved() {
  return false;
}

function initChart() {
  return false;
}

function animateNumber(element, start, end, duration = 500) {
  return false;
}

function initTopDestinations() {
  return false;
}

function initFileDownloadSize() {
  return false;
}
