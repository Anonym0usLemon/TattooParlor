/* TODO: update imports in App.scss to include the stylesheets for /contact (create.js) and for _error.scss */

import react from "react"; 

const NoPage = () => {
    return (
        <>
            <section>
                <div class="secondary-banner">
                    <img src="/images/Contact/background.jpg" alt="" />
                </div>
                <div class="error-content padding-inline">
                    <h1>
                    404: Not Found
                    </h1>
                    <p>The resource you are looking for might have been removed, had it's name changed, or is temporarily unavailable</p>
                    <hr/>
                    <p>Please try the following:</p>
                    <ul>
                        <li>If you typed the page address in the Address bar, make sure that it is spelled correctly.</li>
                        <li>Open the <a href="/">Home Page</a> for this website, and then look for links to the information you want.</li>
                        <li>Click the <a href="javascript:history.go(-1);">back</a> button to try another link.</li>
                    </ul>
                    <p>HTTP 404 - File Not Found</p>
                </div>
            </section>
        </>
    );
}

export default NoPage;