import React from 'react';

export default function Preloader() {  
    $(window).on('scroll load', function () {
        $("#header.cloned #logo img").attr("src", $('#header #logo img').attr('data-sticky-logo'));
    });

  return (
    <>
      {/* START PRELOADER */}
      <div id="preloader">
        <div id="status">
          <div className="status-mes" />
        </div>
      </div>
      {/* END PRELOADER */}
    </>
  );
}
