import mixpanel from "mixpanel-browser";

mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN, {
    autocapture: true,
    track_pageview: true,
    record_sessions_percent: 100,
    record_heatmap_data: true,
})

export default mixpanel