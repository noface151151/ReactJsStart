import React from 'react';

const HeaderSearch = props =>{
    return(
        <div className="lookup d-none d-md-block topbar-search">
        <span
          className="twitter-typeahead"
          style={{ position: "relative", display: "inline-block" }}
        >
          <input
            className="form-control w-300px tt-hint"
            type="text"
            readOnly
            autoComplete="off"
            spellCheck="false"
            tabIndex={-1}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              borderColor: "transparent",
              boxShadow: "none",
              opacity: 1,
              background:
                "none 0% 0% / auto repeat scroll padding-box padding-box rgba(0, 0, 0, 0)"
            }}
            dir="ltr"
          />
          <input
            placeholder="Tìm kiếm mặt hàng, đơn hàng, v.v..."
            className="form-control w-300px tt-input"
            type="text"
            autoComplete="off"
            spellCheck="false"
            dir="auto"
            style={{
              position: "relative",
              verticalAlign: "top",
              backgroundColor: "transparent"
            }}
          />
          <pre
            aria-hidden="true"
            style={{
              position: "absolute",
              visibility: "hidden",
              whiteSpace: "pre",
              fontFamily: "Roboto, sans-serif",
              fontSize: 15,
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 300,
              wordSpacing: 0,
              letterSpacing: "0.5px",
              textIndent: 0,
              textRendering: "auto",
              textTransform: "none"
            }}
          />
          <div
            className="tt-menu"
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              zIndex: 100,
              display: "none"
            }}
          >
            <div className="tt-dataset tt-dataset-theadmin-components" />
          </div>
        </span>
        <div className="lookup-placeholder">
          <i className="ti-search" />
          {/* <span style={{ opacity: 1 }}>
              <strong>Tìm kiếm</strong> mặt hàng, đơn hàng, v.v...
            </span> */}
        </div>
      </div>
    )
}

export default HeaderSearch