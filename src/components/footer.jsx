export default function footer() {
    return (
        <div className="bg-zinc-800 text-white p-5">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
                <div>
                    <h5 className="font-bold mb-3">Home</h5>
                    <ul>
                        <li>Movies</li>
                        <li>Series</li>
                        <li>Shows</li>
                        <li>Watchlist</li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-bold mb-3">Movies</h5>
                    <ul>
                        <li>Genres</li>
                        <li>Trending</li>
                        <li>New Release</li>
                        <li>Popular</li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-bold mb-3">Shows</h5>
                    <ul>
                        <li>Genres</li>
                        <li>Trending</li>
                        <li>New Release</li>
                        <li>Popular</li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-bold mb-3">Support</h5>
                    <ul>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-bold mb-3">Connect With Us</h5>
                    <div className="flex space-x-3">
                        <a href="#" className="text-blue-500 hover:text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.35c0 .732.593 1.325 1.325 1.325h11.482v-9.294h-3.126v-3.622h3.126v-2.671c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.917c-1.505 0-1.794.715-1.794 1.763v2.313h3.586l-.467 3.622h-3.119v9.294h6.126c.732 0 1.325-.593 1.325-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                        </a>
                        <a href="#" className="text-blue-400 hover:text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.797-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.924 2.205-4.924 4.917 0 .386.044.762.126 1.123-4.093-.205-7.719-2.165-10.148-5.144-.424.724-.666 1.565-.666 2.465 0 1.701.869 3.203 2.188 4.081-.806-.026-1.566-.247-2.228-.616v.062c0 2.375 1.69 4.354 3.937 4.809-.412.111-.848.171-1.296.171-.316 0-.624-.031-.927-.089.624 1.953 2.444 3.377 4.6 3.415-1.68 1.319-3.808 2.105-6.115 2.105-.398 0-.79-.023-1.175-.068 2.179 1.397 4.768 2.212 7.548 2.212 9.057 0 14.01-7.5 14.01-14.009 0-.213-.005-.426-.014-.637.964-.695 1.8-1.562 2.462-2.549z"/></svg>
                        </a>
                        <a href="#" className="text-blue-700 hover:text-blue-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24"><path d="M23.994 12.041c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.301 3.438 9.8 8.175 11.461.599.111.82-.261.82-.577 0-.285-.011-1.04-.017-2.042-3.338.726-4.042-1.609-4.042-1.609-.546-1.387-1.332-1.756-1.332-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.419-1.305.762-1.605-2.665-.305-5.467-1.332-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.323 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.019.005 2.046.138 3.005.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.431.372.814 1.102.814 2.221 0 1.604-.014 2.896-.014 3.289 0 .319.216.694.825.576 4.737-1.665 8.175-6.158 8.175-11.459z"/></svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center text-zinc-400 text-sm mt-5 border-t border-zinc-700 pt-5">
                ©2023 opensoft_LBS, All Rights Reserved
                <div className="mt-1">
                    <a href="#" className="hover:text-white">Terms of Use</a> | 
                    <a href="#" className="hover:text-white">Privacy Policy</a> | 
                    <a href="#" className="hover:text-white">Cookie Policy</a>
                </div>
            </div>
        </div>
        
    )
}