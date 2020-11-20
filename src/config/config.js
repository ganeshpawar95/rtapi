import React, { Component } from 'react';

const hostUrl = "https://rtapibackend.herokuapp.com/";

const CONFIG = {
    create_scan: hostUrl+ "api/scan/",
    get_scan_by_id:hostUrl+ "api/scan_detail/",
    getproject: hostUrl+ "api/project_detail/",
    get_all_project: hostUrl+ "api/",
    insertproject:hostUrl+ "api/project/",
}

export default CONFIG;