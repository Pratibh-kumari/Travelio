        const pickupInput = document.getElementById('pickup');
        const destinationInput = document.getElementById('destination');
        const swapBtn = document.getElementById('swap-btn');
        const searchBtn = document.getElementById('search-btn');
        const resultsContainer = document.getElementById('results-container');
        const pickupDropdown = document.getElementById('pickup-dropdown');
        const destinationDropdown = document.getElementById('destination-dropdown');  
        const renderDefaultResults = () => {
            resultsContainer.innerHTML = `
                <div class="text-2xl font-bold text-gray-800 mb-6">Route Comparison</div>       
                <!-- Private Auto Option -->
                <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mb-6 relative">
                    <span class="absolute top-4 right-4 bg-yellow-100 text-yellow-800 text-xs font-bold px-2.5 py-1 rounded-full">Fastest Option</span>
                    <div class="flex items-center mb-4">
                        <span class="text-4xl">🛺</span>
                        <div class="ml-4">
                            <h2 class="text-xl font-bold text-gray-800">Auto</h2>
                            <p class="text-sm text-gray-500">Private Transport</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center border-b pb-4 mb-4">
                        <div class="info-card">
                            <p class="text-red-600">₹ 699</p>
                            <p>Total Cost</p>
                        </div>
                        <div class="info-card">
                            <p>20m</p>
                            <p>Travel Time</p>
                        </div>
                        <div class="info-card">
                            <p>15m<span class="text-xs font-bold">*</span></p>
                            <p>Wait Time</p>
                        </div>
                        <div class="info-card">
                            <p>115g</p>
                            <p>CO₂ Impact</p>
                        </div>
                    </div>
                    <div class="flex justify-between items-center text-sm font-medium text-gray-600">
                        <span>Traffic: <span class="text-orange-500 font-bold">Moderate</span></span>
                        <span>Total Duration: 35m</span>
                    </div>
                </div>
                <!-- Public Bus Option -->
                <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mb-6">
                    <div class="flex items-center mb-4">
                        <span class="text-4xl">🚌</span>
                        <div class="ml-4">
                            <h2 class="text-xl font-bold text-gray-800">Public Bus</h2>
                            <p class="text-sm text-gray-500">Public Transport</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center border-b pb-4 mb-4">
                        <div class="info-card">
                            <p class="text-green-600">₹ 35</p>
                            <p>Total Cost</p>
                        </div>
                        <div class="info-card">
                            <p>9:00 & 18:30</p>
                            <p>Departure Times</p>
                        </div>
                        <div class="info-card">
                            <p>35m</p>
                            <p>Travel Time</p>
                        </div>
                        <div class="info-card">
                            <p>40g</p>
                            <p>CO₂ Impact</p>
                        </div>
                    </div>
                    <div class="flex justify-between items-center text-sm font-medium text-gray-600">
                        <span>Traffic: <span class="text-green-500 font-bold">Low</span></span>
                        <span>Total Duration: 45m</span>
                    </div>
                </div>
                <!-- Faculty Car-pooling Option -->
                <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mb-6 relative">
                    <span class="absolute top-4 right-4 bg-indigo-100 text-indigo-800 text-xs font-bold px-2.5 py-1 rounded-full">Best Overall</span>
                    <div class="flex items-center mb-4">
                        <span class="text-4xl">🚗</span>
                        <div class="ml-4">
                            <h2 class="text-xl font-bold text-gray-800">Faculty Car-pooling</h2>
                            <p class="text-sm text-gray-500">2 Faculty Available</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center border-b pb-4 mb-4">
                        <div class="info-card">
                            <p class="text-green-600">₹ 35</p>
                            <p>Total Cost</p>
                        </div>
                        <div class="info-card">
                            <p>25m</p>
                            <p>Travel Time</p>
                        </div>
                        <div class="info-card">
                            <p>15m<span class="text-xs font-bold">*</span></p>
                            <p>Wait Time</p>
                        </div>
                        <div class="info-card">
                            <p>35g</p>
                            <p>CO₂ Impact</p>
                        </div>
                    </div>
                    <div class="flex justify-between items-center text-sm font-medium text-gray-600">
                        <span>Traffic: <span class="text-green-500 font-bold">Low</span></span>
                        <span>Total Duration: 40m</span>
                    </div>
                </div>

                <!-- Star Note -->
                <p class="mt-4 text-sm text-gray-500 text-right"><sup><span class="text-2xl font-bold">*</span></sup>Terms and condition apply</p>

                <!-- Search Another Route Button -->
                <div class="flex justify-center mt-8">
                    <button id="search-another" class="bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-300 focus:outline-none transition-transform duration-200 transform active:scale-95">
                        <span class="mr-2">←</span> Search Another Route
                    </button>
                </div>
            `;
            document.getElementById('search-another').addEventListener('click', () => {
                resultsContainer.innerHTML = '';
            });
        };
        const renderGandhinagarToRRUResults = () => {
            resultsContainer.innerHTML = `
                <div class="text-2xl font-bold text-gray-800 mb-6">Route Comparison</div>
                
                <!-- Auto Option -->
                <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mb-6 relative">
                    <span class="absolute top-4 right-4 bg-yellow-100 text-yellow-800 text-xs font-bold px-2.5 py-1 rounded-full">Fastest Option</span>
                    <div class="flex items-center mb-4">
                        <span class="text-4xl">🛺</span>
                        <div class="ml-4">
                            <h2 class="text-xl font-bold text-gray-800">Auto</h2>
                            <p class="text-sm text-gray-500">Private Transport</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center border-b pb-4 mb-4">
                        <div class="info-card">
                            <p class="text-red-600">₹ 699</p>
                            <p>Total Cost</p>
                        </div>
                        <div class="info-card">
                            <p>20m</p>
                            <p>Travel Time</p>
                        </div>
                        <div class="info-card">
                            <p>15m<span class="text-xs font-bold">*</span></p>
                            <p>Wait Time</p>
                        </div>
                        <div class="info-card">
                            <p>115g</p>
                            <p>CO₂ Impact</p>
                        </div>
                    </div>
                    <div class="flex justify-between items-center text-sm font-medium text-gray-600">
                        <span>Traffic: <span class="text-orange-500 font-bold">Moderate</span></span>
                        <span>Total Duration: 35m</span>
                    </div>
                </div>
                <!-- Public Bus Option -->
                <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mb-6">
                    <div class="flex items-center mb-4">
                        <span class="text-4xl">🚌</span>
                        <div class="ml-4">
                            <h2 class="text-xl font-bold text-gray-800">Public Bus</h2>
                            <p class="text-sm text-gray-500">Public Transport</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center border-b pb-4 mb-4">
                        <div class="info-card">
                            <p class="text-green-600">₹ 35</p>
                            <p>Total Cost</p>
                        </div>
                        <div class="info-card">
                            <p>9:00 & 18:30</p>
                            <p>Departure Times</p>
                        </div>
                        <div class="info-card">
                            <p>35m</p>
                            <p>Travel Time</p>
                        </div>
                        <div class="info-card">
                            <p>40g</p>
                            <p>CO₂ Impact</p>
                        </div>
                    </div>
                    <div class="flex justify-between items-center text-sm font-medium text-gray-600">
                        <span>Traffic: <span class="text-green-500 font-bold">Low</span></span>
                        <span>Total Duration: 45m</span>
                    </div>
                </div>
                <!-- Faculty Car-pooling Option -->
                <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mb-6 relative">
                    <span class="absolute top-4 right-4 bg-indigo-100 text-indigo-800 text-xs font-bold px-2.5 py-1 rounded-full">Best Overall</span>
                    <div class="flex items-center mb-4">
                        <span class="text-4xl">🚗</span>
                        <div class="ml-4">
                            <h2 class="text-xl font-bold text-gray-800">Faculty Car-pooling</h2>
                            <p class="text-sm text-gray-500">2 Faculty Available</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center border-b pb-4 mb-4">
                        <div class="info-card">
                            <p class="text-green-600">₹ 35</p>
                            <p>Total Cost</p>
                        </div>
                        <div class="info-card">
                            <p>25m</p>
                            <p>Travel Time</p>
                        </div>
                        <div class="info-card">
                            <p>15m<span class="text-xs font-bold">*</span></p>
                            <p>Wait Time</p>
                        </div>
                        <div class="info-card">
                            <p>35g</p>
                            <p>CO₂ Impact</p>
                        </div>
                    </div>
                    <div class="flex justify-between items-center text-sm font-medium text-gray-600">
                        <span>Traffic: <span class="text-green-500 font-bold">Low</span></span>
                        <span>Total Duration: 40m</span>
                    </div>
                </div>        
                <!-- Star Note -->
                <p class="mt-4 text-sm text-gray-500 text-right"><sup><span class="text-2xl font-bold">*</span></sup>Terms and condition apply</p>

                <!-- Search Another Route Button -->
                <div class="flex justify-center mt-8">
                    <a href="./main.html">
                    <button id="search-another" class="bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-300 focus:outline-none transition-transform duration-200 transform active:scale-95">
                        <span class="mr-2">←</span> Search Another Route
                    </button>
                    </a>
                </div>
            `;
            document.getElementById('search-another').addEventListener('click', () => {
                resultsContainer.innerHTML = '';
            });
        };
        const renderBusOnlyResults = () => {
             resultsContainer.innerHTML = `
                <div class="text-2xl font-bold text-gray-800 mb-6">Route Comparison</div>      
                <!-- Public Bus Option -->
                <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mb-6">
                    <div class="flex items-center mb-4">
                        <span class="text-4xl">🚌</span>
                        <div class="ml-4">
                            <h2 class="text-xl font-bold text-gray-800">Public Bus</h2>
                            <p class="text-sm text-gray-500">Public Transport</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center border-b pb-4 mb-4">
                        <div class="info-card">
                            <p class="text-green-600">₹ 35</p>
                            <p>Total Cost</p>
                        </div>
                        <div class="info-card">
                            <p>9:00 & 18:30</p>
                            <p>Departure Times</p>
                        </div>
                        <div class="info-card">
                            <p>35m</p>
                            <p>Travel Time</p>
                        </div>
                        <div class="info-card">
                            <p>40g</p>
                            <p>CO₂ Impact</p>
                        </div>
                    </div>
                    <div class="flex justify-between items-center text-sm font-medium text-gray-600">
                        <span>Traffic: <span class="text-green-500 font-bold">Low</span></span>
                        <span>Total Duration: 45m</span>
                    </div>
                </div>       
                <!-- Search Another Route Button -->
                <div class="flex justify-center mt-8">
                    <a href="./main.html">
                    <button id="search-another" class="bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-300 focus:outline-none transition-transform duration-200 transform active:scale-95">
                        <span class="mr-2">←</span> Search Another Route
                    </button>
                    </a>
                </div>
            `;
            document.getElementById('search-another').addEventListener('click', () => {
                resultsContainer.innerHTML = '';
            });
        };
        const renderNoRoutesFound = () => {
            resultsContainer.innerHTML = `
                <div class="text-center p-8 bg-gray-50 rounded-lg">
                    <p class="text-lg text-gray-500">😔 No routes found for the specified locations. Please try again.</p>
                </div>
            `;
        };   
        pickupInput.addEventListener('focus', () => {
            pickupDropdown.style.display = 'block';
        });
        pickupInput.addEventListener('blur', (e) => {
            setTimeout(() => {
                if (!e.relatedTarget || !e.relatedTarget.closest('#pickup-dropdown')) {
                    pickupDropdown.style.display = 'none';
                }
            }, 100);
        }); 
        pickupDropdown.addEventListener('mousedown', (e) => {
            if (e.target.tagName === 'P') {
                e.preventDefault();
                pickupInput.value = e.target.dataset.value;
                pickupDropdown.style.display = 'none';
            }
        });    
        destinationInput.addEventListener('focus', () => {
            destinationDropdown.style.display = 'block';
        });
        destinationInput.addEventListener('blur', (e) => {
            setTimeout(() => {
                if (!e.relatedTarget || !e.relatedTarget.closest('#destination-dropdown')) {
                    destinationDropdown.style.display = 'none';
                }
            }, 100);
        });      
        destinationDropdown.addEventListener('mousedown', (e) => {
            if (e.target.tagName === 'P') {
                e.preventDefault();
                destinationInput.value = e.target.dataset.value;
                destinationDropdown.style.display = 'none';
            }
        });   
        swapBtn.addEventListener('click', () => {
            const temp = pickupInput.value;
            pickupInput.value = destinationInput.value;
            destinationInput.value = temp;
        });
        searchBtn.addEventListener('click', () => {
            const pickup = pickupInput.value.trim().toLowerCase();
            const destination = destinationInput.value.trim().toLowerCase();
            if (pickup === 'rru' && destination === 'gandhinagar') {
                renderDefaultResults();
            } else if (pickup === 'gandhinagar' && destination === 'rru') {
                 renderGandhinagarToRRUResults();
            } else if ((pickup === 'dahegam' && destination === 'rru') || (pickup === 'dahegam' && destination === 'gandhinagar') || (pickup === 'rru' && destination === 'dahegam')) {
                renderBusOnlyResults();
            }
            else {
                renderNoRoutesFound();
            }
        });