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
    }
];

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
    const comparisonSection = document.getElementById('comparison-section');
    const comparisonBody = document.getElementById('comparison-body');

    // Clear previous
    resultDisplay.innerHTML = '';
    comparisonBody.innerHTML = '';

    const best = results[0];

    // Top Recommendation Card
    if (best.score > 0) {
        resultDisplay.innerHTML = `
            <div class="recommendation-card glass">
                <span class="score-tag">Match Score: ${best.score}%</span>
                <h2>${best.name}</h2>
                <p>${best.description}</p>
                <div class="stat-grid">
                    <div class="stat-item">
                        <span class="stat-label">Strength</span>
                        <span class="stat-value">${best.strength} MPa</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Density</span>
                        <span class="stat-value">${best.density} kg/m³</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Max Temp</span>
                        <span class="stat-value">${best.maxTemp} °C</span>
                    </div>
                </div>
                <div class="pro-tip" style="font-size: 0.85rem; color: var(--primary-neon);">
                    💡 Recommended based on your ${document.getElementById('environment').value} environment and ${document.getElementById('temperature').value}°C requirements.
                </div>
            </div>
        `;
    } else {
        resultDisplay.innerHTML = `
            <div class="empty-state">
                <h3 style="color: #ff4d4d">No Suitable Material Found</h3>
                <p>The requirements (especially temperature) exceed the limits of our current database materials.</p>
            </div>
        `;
    }

    // Populate Comparison Table
    results.forEach(m => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${m.name}</strong></td>
            <td>${m.strength}</td>
            <td>${m.density}</td>
            <td>${m.maxTemp}</td>
            <td><span class="score-tag" style="${m.score === 0 ? 'background: rgba(255,0,0,0.1); color: #ff4d4d;' : ''}">${m.score}%</span></td>
        `;
        comparisonBody.appendChild(row);
    });

    comparisonSection.style.display = 'block';
}
