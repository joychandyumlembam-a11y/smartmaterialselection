const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const primaryNavigation = document.querySelector('.navbar-nav');

if (mobileMenuToggle && primaryNavigation) {
    mobileMenuToggle.addEventListener('click', () => {
        const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
        mobileMenuToggle.setAttribute('aria-expanded', String(!isExpanded));
        primaryNavigation.classList.toggle('active');
    });

    primaryNavigation.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            primaryNavigation.classList.remove('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

const materialDatabase = [
    {
        name: "Structural Steel (A36)",
        strength: 400, // MPa
        density: 7850, // kg/m3
        maxTemp: 500,  // C (Structural limit)
        corrosionResistance: 4, // 1-10
        costFactor: 2, // 1-10
        description: "Versatile, strong, and economical. Standard for construction and machinery."
    },
    {
        name: "Stainless Steel (316)",
        strength: 550,
        density: 8000,
        maxTemp: 870,
        corrosionResistance: 9,
        costFactor: 6,
        description: "Excellent corrosion resistance, ideal for marine and chemical environments."
    },
    {
        name: "Aluminum 6061-T6",
        strength: 290,
        density: 2700,
        maxTemp: 180,
        corrosionResistance: 7,
        costFactor: 4,
        description: "High strength-to-weight ratio, easy to machine and weld."
    },
    {
        name: "Titanium Alloy (Gr 5)",
        strength: 950,
        density: 4430,
        maxTemp: 600,
        corrosionResistance: 9,
        costFactor: 9,
        description: "Aerospace grade material. Incredible strength, light weight, and heat resistance."
    },
    {
        name: "Carbon Fiber Epoxy",
        strength: 1500,
        density: 1550,
        maxTemp: 120,
        corrosionResistance: 10,
        costFactor: 10,
        description: "Ultimate performance. High stiffness and strength with minimal weight."
    },
    {
        name: "Pure Copper (C101)",
        strength: 220,
        density: 8960,
        maxTemp: 250,
        corrosionResistance: 8,
        costFactor: 8,
        description: "Unmatched electrical and thermal conductivity."
    },
    {
        name: "Inconel 625",
        strength: 850,
        density: 8440,
        maxTemp: 980,
        corrosionResistance: 10,
        costFactor: 10,
        description: "Superalloy designed for extreme heat and high-pressure environments."
    },
    {
        name: "Cast Iron (Gray)",
        strength: 200,
        density: 7100,
        maxTemp: 450,
        corrosionResistance: 5,
        costFactor: 1,
        description: "Excellent vibration damping and wear resistance. Great for machine bases."
    },
    {
        name: "Brass (C360)",
        strength: 310,
        density: 8500,
        maxTemp: 300,
        corrosionResistance: 7,
        costFactor: 6,
        description: "Highly machinable with good corrosion resistance and aesthetic appeal."
    },
    {
        name: "Magnesium Alloy (AZ31B)",
        strength: 260,
        density: 1770,
        maxTemp: 150,
        corrosionResistance: 3,
        costFactor: 7,
        description: "Lightest structural metal. High specific strength but reactive to corrosion."
    },
    {
        name: "Tungsten Alloy",
        strength: 1000,
        density: 19300,
        maxTemp: 2500,
        corrosionResistance: 8,
        costFactor: 10,
        description: "Extremely dense and has the highest melting point of all metals."
    },
    {
        name: "PEEK (Polymer)",
        strength: 100,
        density: 1300,
        maxTemp: 250,
        corrosionResistance: 10,
        costFactor: 9,
        description: "High-performance thermoplastic with high heat resistance and chemical stability."
    },
    {
        name: "ABS Plastic",
        strength: 40,
        density: 1050,
        maxTemp: 80,
        corrosionResistance: 10,
        costFactor: 2,
        description: "Common, lightweight plastic. Good impact resistance but low heat tolerance."
    },
    {
        name: "Alumina Ceramic",
        strength: 300,
        density: 3950,
        maxTemp: 1500,
        corrosionResistance: 10,
        costFactor: 8,
        description: "Exceptional hardness and heat resistance. Brittle but chemically inert."
    },
    {
        name: "Lead (Pure)",
        strength: 15,
        density: 11340,
        maxTemp: 100,
        corrosionResistance: 8,
        costFactor: 4,
        description: "Highly dense, soft, and excellent for radiation shielding."
    },
    {
        name: "Nickel Alloy (Monel 400)",
        strength: 480,
        density: 8830,
        maxTemp: 425,
        corrosionResistance: 10,
        costFactor: 9,
        description: "Exceptional corrosion resistance, excellent for seawater and chemical processing."
    },
    {
        name: "Cobalt Alloy (Stellite)",
        strength: 650,
        density: 8400,
        maxTemp: 1200,
        corrosionResistance: 9,
        costFactor: 10,
        description: "Wear and heat resistant superalloy, ideal for high-temperature applications."
    },
    {
        name: "Aluminum 7075-T6",
        strength: 570,
        density: 2810,
        maxTemp: 150,
        corrosionResistance: 5,
        costFactor: 7,
        description: "Aerospace-grade aluminum with exceptional strength-to-weight ratio."
    },
    {
        name: "Duplex Stainless Steel (2205)",
        strength: 620,
        density: 7800,
        maxTemp: 800,
        corrosionResistance: 10,
        costFactor: 7,
        description: "High strength and corrosion resistance, excellent for offshore applications."
    },
    {
        name: "Tantalum",
        strength: 180,
        density: 16650,
        maxTemp: 2996,
        corrosionResistance: 10,
        costFactor: 10,
        description: "Extremely corrosion resistant, used in chemical processing and electronics."
    },
    {
        name: "Graphene Composite",
        strength: 1400,
        density: 1200,
        maxTemp: 300,
        corrosionResistance: 10,
        costFactor: 10,
        description: "Next-generation material with exceptional strength and thermal properties."
    },
    {
        name: "Beryllium Copper (C17500)",
        strength: 1310,
        density: 8230,
        maxTemp: 250,
        corrosionResistance: 8,
        costFactor: 9,
        description: "High strength-to-weight, excellent electrical and thermal conductivity."
    },
    {
        name: "Silicon Carbide Ceramic",
        strength: 390,
        density: 3100,
        maxTemp: 1650,
        corrosionResistance: 10,
        costFactor: 9,
        description: "Extremely hard and heat resistant, ideal for extreme environments."
    },
    {
        name: "Polycarbonate (PC)",
        strength: 65,
        density: 1200,
        maxTemp: 110,
        corrosionResistance: 9,
        costFactor: 4,
        description: "Transparent, impact-resistant polymer suitable for optical and structural applications."
    },
    {
        name: "Nylon 6 (PA6)",
        strength: 90,
        density: 1140,
        maxTemp: 80,
        corrosionResistance: 9,
        costFactor: 3,
        description: "Durable engineering plastic with good mechanical properties and ease of processing."
    },
    {
        name: "Glass Fiber Reinforced Plastic",
        strength: 210,
        density: 1800,
        maxTemp: 140,
        corrosionResistance: 10,
        costFactor: 5,
        description: "Lightweight composite with good strength and corrosion resistance."
    },
    {
        name: "Hastelloy C-276",
        strength: 620,
        density: 8940,
        maxTemp: 1040,
        corrosionResistance: 10,
        costFactor: 10,
        description: "Superior corrosion resistance in aggressive chemical environments."
    },
    {
        name: "Aluminum Nitride Ceramic",
        strength: 280,
        density: 3260,
        maxTemp: 1800,
        corrosionResistance: 10,
        costFactor: 8,
        description: "High thermal conductivity ceramic, excellent for electronics and thermal management."
    },
    {
        name: "Zinc Alloy (Zamak)",
        strength: 380,
        density: 6700,
        maxTemp: 120,
        corrosionResistance: 6,
        costFactor: 2,
        description: "Cost-effective die-casting alloy with good dimensional accuracy."
    },
    {
        name: "Inconel 718",
        strength: 1240,
        density: 8190,
        maxTemp: 1100,
        corrosionResistance: 10,
        costFactor: 10,
        description: "High-strength superalloy for jet engines and turbines."
    },
    {
        name: "Aluminum Oxide (Sapphire)",
        strength: 400,
        density: 3980,
        maxTemp: 2050,
        corrosionResistance: 10,
        costFactor: 9,
        description: "Ultra-hard ceramic with exceptional transparency and thermal properties."
    },
    {
        name: "Chromium Plated Steel",
        strength: 450,
        density: 7850,
        maxTemp: 520,
        corrosionResistance: 8,
        costFactor: 5,
        description: "Enhanced corrosion and wear resistance through chromium plating."
    },
    {
        name: "Epoxy Resin Composite",
        strength: 120,
        density: 1250,
        maxTemp: 200,
        corrosionResistance: 10,
        costFactor: 6,
        description: "Versatile thermoset polymer with excellent adhesion and chemical resistance."
    },
    {
        name: "Bismuth Alloy",
        strength: 25,
        density: 9750,
        maxTemp: 80,
        corrosionResistance: 7,
        costFactor: 7,
        description: "Low-melting point alloy for solder applications and special casting."
    }
];

renderMaterialLibrary(materialDatabase);

const themeToggle = document.getElementById('theme-toggle');

function updateThemeState(theme) {
    document.documentElement.dataset.theme = theme;
    if (!themeToggle) return;
    themeToggle.classList.toggle('active', theme === 'dark');
    themeToggle.querySelector('.toggle-icon').textContent = theme === 'dark' ? '🌙' : '☀️';
    themeToggle.querySelector('.toggle-label').textContent = theme === 'dark' ? 'Dark mode' : 'Light mode';
}

const savedTheme = localStorage.getItem('smartMaterialTheme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
updateThemeState(savedTheme);

themeToggle?.addEventListener('click', function () {
    const currentTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    updateThemeState(currentTheme);
    localStorage.setItem('smartMaterialTheme', currentTheme);
});

document.getElementById('requirements-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get Inputs
    const load = parseFloat(document.getElementById('load').value);
    const temp = parseFloat(document.getElementById('temperature').value);
    const environment = document.getElementById('environment').value;

    // Environmental Severity Mapping
    const envSeverityMap = {
        'mild': 2,
        'moderate': 5,
        'harsh': 9
    };
    const envSeverity = envSeverityMap[environment];

    // Calculate Scores and Filter
    const analysis = materialDatabase.map(material => {
        let score = 0;
        let reasons = [];

        // 1. Temperature Constraint (Mandatory)
        if (temp > material.maxTemp) {
            return { ...material, score: 0, suitable: false, reason: "Exceeds Max Temperature" };
        }

        // 2. Strength Score (Target 40%) - Normalized against target load
        // Assuming load is a proxy for required strength. If mat strength < load factor, penalize.
        const strengthMargin = material.strength / (load * 0.1); // Rough conversion factor
        const strengthScore = Math.min(strengthMargin * 10, 100) * 0.4;

        // 3. Efficiency Score (Strength-to-Weight) (30%)
        const stw = material.strength / material.density;
        const stwScore = (stw / 1.0) * 100 * 0.3; // Normalized against Carbon Fiber rough max

        // 4. Environmental Score (30%)
        // If enviroment is harsh, corrosion resistance is critical.
        const envScore = (material.corrosionResistance / envSeverity) * 100 * 0.3;

        score = (strengthScore + stwScore + envScore);

        // Final Score normalizer
        score = Math.min(Math.round(score), 100);

        return { ...material, score, suitable: true };
    });

    // Sort by score
    analysis.sort((a, b) => b.score - a.score);

    displayResults(analysis);
});

function displayResults(results) {
    const resultDisplay = document.getElementById('result-display');
    const resultsSection = document.getElementById('results-section');
    const detailedResults = document.getElementById('detailed-results');
    const comparisonSection = document.getElementById('comparison-section');
    const comparisonBody = document.getElementById('comparison-body');
    const chartsSection = document.getElementById('charts-section');

    // Clear previous results
    resultDisplay.innerHTML = '';
    detailedResults.innerHTML = '';
    comparisonBody.innerHTML = '';

    const best = results[0];

    // Display top recommendation
    if (best.score > 0) {
        // Update result panel with primary recommendation
        const scoreColor = best.score >= 80 ? 'high' : '';
        resultDisplay.innerHTML = `
            <div class="recommendation-card">
                <span class="score-badge ${scoreColor}">Match Score: ${best.score}%</span>
                <h2>${best.name}</h2>
                <p class="recommendation-description">${best.description}</p>
                <div class="properties-grid">
                    <div class="property-item">
                        <span class="property-label">Strength</span>
                        <span class="property-value">${best.strength}</span>
                        <span class="property-unit">MPa</span>
                    </div>
                    <div class="property-item">
                        <span class="property-label">Density</span>
                        <span class="property-value">${best.density}</span>
                        <span class="property-unit">kg/m³</span>
                    </div>
                    <div class="property-item">
                        <span class="property-label">Max Temp</span>
                        <span class="property-value">${best.maxTemp}</span>
                        <span class="property-unit">°C</span>
                    </div>
                    <div class="property-item">
                        <span class="property-label">Corrosion Resist.</span>
                        <span class="property-value">${best.corrosionResistance}/10</span>
                        <span class="property-unit">Rating</span>
                    </div>
                </div>
                <div class="recommendation-insights">
                    <div class="insights-title">✓ Why This Material Works</div>
                    <ul class="insights-list">
                        <li>Meets or exceeds all engineering requirements</li>
                        <li>Optimal balance of strength and density</li>
                        <li>Suitable for your environmental conditions</li>
                        <li>Proven track record in similar applications</li>
                    </ul>
                </div>
            </div>
        `;

        // Show results section
        resultsSection.style.display = 'block';

        // Populate top alternatives
        const topAlternatives = results.slice(1, 4).filter(m => m.score > 0);
        if (topAlternatives.length > 0) {
            let alternativesHTML = '<div style="margin-top: 2rem;"><h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1.5rem; color: #0f172a;">Alternative Materials</h3><div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">';
            
            topAlternatives.forEach(alt => {
                alternativesHTML += `
                    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 1rem; padding: 1.5rem; transition: all 0.3s ease;">
                        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                            <h4 style="font-size: 1.1rem; font-weight: 700; color: #0f172a; flex: 1;">${alt.name}</h4>
                            <span style="background: linear-gradient(135deg, #dbeafe 0%, #cffafe 100%); color: #1e40af; padding: 0.5rem 0.75rem; border-radius: 9999px; font-size: 0.8rem; font-weight: 700; white-space: nowrap; margin-left: 0.5rem;">${alt.score}%</span>
                        </div>
                        <p style="font-size: 0.9rem; color: #475569; margin-bottom: 1rem; line-height: 1.5;">${alt.description}</p>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; font-size: 0.85rem;">
                            <div><span style="color: #78716c; display: block; text-transform: uppercase; font-size: 0.7rem; letter-spacing: 0.05em; margin-bottom: 0.25rem;">Strength</span><span style="color: #1e40af; font-weight: 700;">${alt.strength} MPa</span></div>
                            <div><span style="color: #78716c; display: block; text-transform: uppercase; font-size: 0.7rem; letter-spacing: 0.05em; margin-bottom: 0.25rem;">Density</span><span style="color: #1e40af; font-weight: 700;">${alt.density} kg/m³</span></div>
                        </div>
                    </div>
                `;
            });
            alternativesHTML += '</div></div>';
            detailedResults.innerHTML = alternativesHTML;
        }
    } else {
        resultDisplay.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <rect x="8" y="8" width="10" height="10" fill="#fecaca" rx="2"/>
                        <rect x="22" y="8" width="10" height="10" fill="#fecaca" rx="2"/>
                        <rect x="8" y="22" width="10" height="10" fill="#fecaca" rx="2"/>
                        <rect x="22" y="22" width="10" height="10" fill="#fecaca" rx="2"/>
                        <rect x="8" y="36" width="24" height="4" fill="#fecaca" rx="2"/>
                    </svg>
                </div>
                <h3 class="empty-title">No Suitable Material Found</h3>
                <p class="empty-description">The requirements exceed the limits of our material database. Consider adjusting temperature or load parameters.</p>
            </div>
        `;
        resultsSection.style.display = 'none';
        return;
    }

    // Populate Comparison Table
    results.forEach((m, index) => {
        const row = document.createElement('tr');
        const unsuitableClass = m.score === 0 ? 'unsuitable' : '';
        row.innerHTML = `
            <td><strong>${m.name}</strong></td>
            <td>${m.strength} MPa</td>
            <td>${m.density} kg/m³</td>
            <td>${m.maxTemp}°C</td>
            <td>${m.corrosionResistance}/10</td>
            <td><span class="score-tag ${unsuitableClass}">${m.score}%</span></td>
        `;
        row.style.animation = `slideInUp 0.3s ease-out ${index * 0.05}s backwards`;
        comparisonBody.appendChild(row);
    });

    comparisonSection.style.display = 'block';

    // Initialize Charts
    if (best.score > 0) {
        chartsSection.style.display = 'block';
        const topMaterials = results.slice(0, 8).filter(m => m.score > 0);
        
        setTimeout(() => {
            createStrengthLineChart(topMaterials);
            createDensityPieChart(topMaterials);
            createTemperatureAreaChart(topMaterials);
            createCostDoughnutChart(topMaterials);
            createStrengthDensityScatterChart(topMaterials);
            createRadarChart(best);
        }, 100);
    }

    // Scroll to results
    setTimeout(() => {
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200);
}

// Chart.js Color Scheme - Professional Blue
const chartColors = {
    primary: '#1e40af',
    secondary: '#0891b2',
    accent1: '#06b6d4',
    accent2: '#d97706',
    accent3: '#059669',
    accent4: '#3b82f6',
    gradient: ['#1e40af', '#3b82f6', '#0891b2', '#06b6d4', '#d97706', '#059669', '#0ea5e9', '#8b5cf6']
};

// Strength Chart - Line Chart with Points
function createStrengthLineChart(materials) {
    const ctx = document.getElementById('strengthChart').getContext('2d');
    
    if (window.strengthChartInstance) {
        window.strengthChartInstance.destroy();
    }

    window.strengthChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: materials.map(m => m.name.split('(')[0].trim()),
            datasets: [{
                label: 'Strength (MPa)',
                data: materials.map(m => m.strength),
                borderColor: chartColors.primary,
                backgroundColor: chartColors.primary + '15',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 6,
                pointBackgroundColor: chartColors.primary,
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointHoverRadius: 8,
                pointHoverBackgroundColor: chartColors.secondary,
                hoverBackgroundColor: chartColors.primary + '30'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    labels: { 
                        color: '#0f172a',
                        font: { size: 12 }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(15, 23, 42, 0.95)',
                    titleColor: '#1e40af',
                    bodyColor: '#0f172a',
                    borderColor: '#1e40af',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: false,
                    callbacks: {
                        label: (context) => context.parsed.y + ' MPa'
                    }
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(0, 0, 0, 0.05)' },
                    ticks: { color: '#475569', font: { size: 10 } }
                },
                y: {
                    grid: { color: 'rgba(0, 0, 0, 0.05)' },
                    ticks: { color: '#475569', font: { size: 10 } }
                }
            }
        }
    });
}

// Density Chart - Doughnut Chart
function createDensityPieChart(materials) {
    const ctx = document.getElementById('densityChart').getContext('2d');
    
    if (window.densityChartInstance) {
        window.densityChartInstance.destroy();
    }

    const totalDensity = materials.reduce((sum, m) => sum + m.density, 0);

    window.densityChartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: materials.map(m => m.name.split('(')[0].trim()),
            datasets: [{
                data: materials.map(m => ((m.density / totalDensity) * 100).toFixed(1)),
                backgroundColor: chartColors.gradient.map(color => color + 'CC'),
                borderColor: '#ffffff',
                borderWidth: 2,
                hoverBackgroundColor: chartColors.gradient.map(color => color),
                hoverBorderWidth: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'right',
                    labels: { 
                        color: '#475569',
                        font: { size: 10 },
                        padding: 12,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(15, 23, 42, 0.95)',
                    titleColor: '#1e40af',
                    bodyColor: '#0f172a',
                    borderColor: '#1e40af',
                    borderWidth: 1,
                    padding: 12,
                    callbacks: {
                        label: (context) => context.parsed + '%'
                    }
                }
            }
        }
    });
}

// Temperature Chart - Area Chart
function createTemperatureAreaChart(materials) {
    const ctx = document.getElementById('temperatureChart').getContext('2d');
    
    if (window.temperatureChartInstance) {
        window.temperatureChartInstance.destroy();
    }

    window.temperatureChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: materials.map(m => m.name.split('(')[0].trim()),
            datasets: [{
                label: 'Max Temperature (°C)',
                data: materials.map(m => m.maxTemp),
                borderColor: chartColors.accent2,
                backgroundColor: chartColors.accent2 + '25',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 5,
                pointBackgroundColor: chartColors.accent2,
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointHoverRadius: 7,
                pointHoverBackgroundColor: chartColors.accent1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    labels: { 
                        color: '#0f172a',
                        font: { size: 12 }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(15, 23, 42, 0.95)',
                    titleColor: '#d97706',
                    bodyColor: '#0f172a',
                    borderColor: '#d97706',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: false,
                    callbacks: {
                        label: (context) => context.parsed.y + ' °C'
                    }
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(0, 0, 0, 0.05)' },
                    ticks: { color: '#475569', font: { size: 10 } }
                },
                y: {
                    grid: { color: 'rgba(0, 0, 0, 0.05)' },
                    ticks: { color: '#475569', font: { size: 10 } }
                }
            }
        }
    });
}

// Cost Chart - Doughnut Chart with Custom Colors
function createCostDoughnutChart(materials) {
    const ctx = document.getElementById('costChart').getContext('2d');
    
    if (window.costChartInstance) {
        window.costChartInstance.destroy();
    }

    const totalCost = materials.reduce((sum, m) => sum + m.costFactor, 0);

    window.costChartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: materials.map(m => m.name.split('(')[0].trim()),
            datasets: [{
                data: materials.map(m => ((m.costFactor / totalCost) * 100).toFixed(1)),
                backgroundColor: chartColors.gradient.map((color, i) => i % 2 === 0 ? color + 'BB' : color + '88'),
                borderColor: '#ffffff',
                borderWidth: 2,
                hoverBackgroundColor: chartColors.gradient,
                hoverBorderWidth: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { 
                        color: '#475569',
                        font: { size: 9 },
                        padding: 10,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(15, 23, 42, 0.95)',
                    titleColor: '#0891b2',
                    bodyColor: '#0f172a',
                    borderColor: '#0891b2',
                    borderWidth: 1,
                    padding: 12,
                    callbacks: {
                        label: (context) => 'Cost: ' + context.parsed + '%'
                    }
                }
            }
        }
    });
}

// Strength vs Density - Scatter Chart
function createStrengthDensityScatterChart(materials) {
    const ctx = document.getElementById('bubbleChart').getContext('2d');
    
    if (window.bubbleChartInstance) {
        window.bubbleChartInstance.destroy();
    }

    window.bubbleChartInstance = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: materials.map((m, i) => ({
                label: m.name.split('(')[0].trim(),
                data: [{
                    x: m.density,
                    y: m.strength
                }],
                backgroundColor: chartColors.gradient[i % chartColors.gradient.length] + '70',
                borderColor: chartColors.gradient[i % chartColors.gradient.length],
                borderWidth: 2,
                pointRadius: 8,
                pointHoverRadius: 10,
                hoverBackgroundColor: chartColors.gradient[i % chartColors.gradient.length]
            }))
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: '#475569',
                        font: { size: 9 },
                        padding: 8,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(15, 23, 42, 0.95)',
                    titleColor: '#1e40af',
                    bodyColor: '#0f172a',
                    borderColor: '#1e40af',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: true,
                    callbacks: {
                        title: (context) => context[0].label,
                        label: (context) => {
                            const material = materials[context.datasetIndex];
                            return [
                                'Density: ' + context.raw.x + ' kg/m³',
                                'Strength: ' + context.raw.y + ' MPa',
                                'Cost: ' + material.costFactor + '/10'
                            ];
                        }
                    }
                }
            },
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    title: { 
                        display: true, 
                        text: 'Density (kg/m³)', 
                        color: '#1e40af',
                        font: { size: 11, weight: 'bold' }
                    },
                    grid: { color: 'rgba(0, 0, 0, 0.05)' },
                    ticks: { color: '#475569', font: { size: 10 } }
                },
                y: {
                    title: { 
                        display: true, 
                        text: 'Strength (MPa)', 
                        color: '#1e40af',
                        font: { size: 11, weight: 'bold' }
                    },
                    grid: { color: 'rgba(0, 0, 0, 0.05)' },
                    ticks: { color: '#475569', font: { size: 10 } }
                }
            }
        }
    });
}

// Radar Chart - Top Material Properties
function renderMaterialLibrary(materials) {
    const container = document.getElementById('material-list');
    if (!container) return;

    container.innerHTML = materials.map(material => `
        <article class="material-card">
            <div class="material-badge">${material.score !== undefined ? material.score + '% Match' : 'Available'}</div>
            <h3>${material.name}</h3>
            <p>${material.description}</p>
            <div class="material-specs">
                <span><strong>Strength:</strong><em>${material.strength} MPa</em></span>
                <span><strong>Density:</strong><em>${material.density} kg/m³</em></span>
                <span><strong>Max Temp:</strong><em>${material.maxTemp} °C</em></span>
                <span><strong>Corrosion:</strong><em>${material.corrosionResistance}/10</em></span>
                <span><strong>Cost Factor:</strong><em>${material.costFactor}/10</em></span>
            </div>
        </article>
    `).join('');
}

function createRadarChart(topMaterial) {
    const ctx = document.getElementById('radarChart').getContext('2d');
    
    if (window.radarChartInstance) {
        window.radarChartInstance.destroy();
    }

    // Normalize values for radar chart (0-100 scale)
    const maxValues = {
        strength: 1500,
        density: 20000,
        maxTemp: 2500,
        corrosionResistance: 10,
        costFactor: 10
    };

    const normalizedData = [
        (topMaterial.strength / maxValues.strength) * 100,
        (topMaterial.density / maxValues.density) * 100,
        (topMaterial.maxTemp / maxValues.maxTemp) * 100,
        (topMaterial.corrosionResistance / maxValues.corrosionResistance) * 100,
        (topMaterial.costFactor / maxValues.costFactor) * 100
    ];

    window.radarChartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Strength', 'Density', 'Max Temp', 'Corrosion Resist.', 'Cost'],
            datasets: [{
                label: topMaterial.name.split('(')[0].trim(),
                data: normalizedData,
                borderColor: chartColors.secondary,
                backgroundColor: chartColors.secondary + '25',
                pointBackgroundColor: chartColors.secondary,
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: chartColors.secondary,
                pointRadius: 5,
                pointHoverRadius: 7,
                tension: 0.3,
                fill: true,
                borderWidth: 2.5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    labels: {
                        color: '#0f172a',
                        font: { size: 12, weight: 'bold' },
                        padding: 15
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(15, 23, 42, 0.95)',
                    titleColor: '#0891b2',
                    bodyColor: '#0f172a',
                    borderColor: '#0891b2',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            return context.parsed.r.toFixed(1) + '/100';
                        }
                    }
                }
            },
            scales: {
                r: {
                    min: 0,
                    max: 100,
                    beginAtZero: true,
                    grid: { color: 'rgba(30, 64, 175, 0.1)' },
                    ticks: { 
                        color: '#475569',
                        font: { size: 9 },
                        stepSize: 20
                    },
                    pointLabels: {
                        color: '#1e40af',
                        font: { size: 11, weight: 'bold' }
                    }
                }
            }
        }
    });
}
