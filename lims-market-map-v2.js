// Pre-populated LIMS company data based on market research (v2 - expanded with more Seed/Series A companies and URLs)
const defaultCompanies = [
    // SEED/EARLY STAGE COMPANIES
    { id: 1, name: "Genemod", workflow: "Sample Intake & Accessioning", fundingStage: "Seed/Early", description: "Cloud-based LIMS for biotech with sample tracking", differentiator: "Biotech-focused", valuation: "$7.2M total funding", investors: "Defy, LDV Partners", website: "genemod.net", url: "https://genemod.net" },
    { id: 2, name: "Genemod", workflow: "Bench Work & Analysis", fundingStage: "Seed/Early", description: "Cloud-based LIMS for biotech with ELN integration", differentiator: "AI-native", valuation: "$7.2M total funding", investors: "Defy, LDV Partners", website: "genemod.net", url: "https://genemod.net" },
    { id: 3, name: "LIMSey", workflow: "Bench Work & Analysis", fundingStage: "Seed/Early", description: "LIMS for materials and physical testing labs", differentiator: "Materials testing", valuation: "", investors: "", website: "limsey.com", url: "https://www.limsey.com" },

    // SERIES A-B COMPANIES
    { id: 4, name: "Ovation.io", workflow: "Sample Intake & Accessioning", fundingStage: "Series A-B", description: "Cloud LIMS for clinical diagnostics and research", differentiator: "Clinical focus", valuation: "$28.35M raised (Series B)", investors: "SignalFire, Madrona", website: "ovation.io", url: "https://www.ovation.io" },
    { id: 5, name: "Ovation.io", workflow: "Reporting & COA", fundingStage: "Series A-B", description: "Clinical lab data management and analytics", differentiator: "Clinical informatics", valuation: "$28.35M raised (Series B)", investors: "SignalFire, Madrona", website: "ovation.io", url: "https://www.ovation.io" },
    { id: 6, name: "Labguru", workflow: "Bench Work & Analysis", fundingStage: "Series A-B", description: "Cloud platform combining ELN and LIMS for life sciences", differentiator: "Research-focused", valuation: "Acquired by Battery Ventures 2024", investors: "Battery Ventures", website: "labguru.com", url: "https://www.labguru.com" },
    { id: 7, name: "Elm", workflow: "Reporting & COA", fundingStage: "Series A-B", description: "Quality control labs for manufacturers", differentiator: "Manufacturing QA", valuation: "", investors: "", website: "elm.com", url: "https://elm.com" },
    { id: 8, name: "OmniLab", workflow: "Bench Work & Analysis", fundingStage: "Series A-B", description: "Instrument integration and IoT middleware", differentiator: "Connectivity-first", valuation: "", investors: "", website: "omnilab.io", url: "https://omnilab.io" },

    // SERIES C+ COMPANIES
    { id: 9, name: "QBench", workflow: "Sample Intake & Accessioning", fundingStage: "Series C+", description: "Cloud-native LIMS for analytical testing labs", differentiator: "UX-first", valuation: "", investors: "", website: "qbench.com", url: "https://qbench.com" },
    { id: 10, name: "QBench", workflow: "Bench Work & Analysis", fundingStage: "Series C+", description: "Cloud-native LIMS for analytical testing labs", differentiator: "UX-first", valuation: "", investors: "", website: "qbench.com", url: "https://qbench.com" },
    { id: 11, name: "QBench", workflow: "QA/QC Review", fundingStage: "Series C+", description: "Cloud-native LIMS for analytical testing labs", differentiator: "Auto-flags", valuation: "", investors: "", website: "qbench.com", url: "https://qbench.com" },
    { id: 12, name: "QBench", workflow: "Reporting & COA", fundingStage: "Series C+", description: "Cloud-native LIMS for analytical testing labs", differentiator: "UX-first", valuation: "", investors: "", website: "qbench.com", url: "https://qbench.com" },
    { id: 13, name: "Lockbox LIMS", workflow: "Reporting & COA", fundingStage: "Series C+", description: "Salesforce-based lab management platform", differentiator: "CRM integration", valuation: "", investors: "", website: "lockboxlims.com", url: "https://lockboxlims.com" },
    { id: 14, name: "Lockbox LIMS", workflow: "Invoicing & Delivery", fundingStage: "Series C+", description: "Salesforce-based lab management platform", differentiator: "Billing automation", valuation: "", investors: "", website: "lockboxlims.com", url: "https://lockboxlims.com" },
    { id: 15, name: "Benchling", workflow: "Bench Work & Analysis", fundingStage: "Series C+", description: "Cloud platform for biotech R&D with biology-first LIMS", differentiator: "Biotech R&D platform", valuation: "High valuation 2021", investors: "Benchmark, F-Prime", website: "benchling.com", url: "https://www.benchling.com" },
    { id: 16, name: "Benchling", workflow: "Sample Intake & Accessioning", fundingStage: "Series C+", description: "Sample tracking and inventory for biotech R&D", differentiator: "Registry + LIMS", valuation: "High valuation 2021", investors: "Benchmark, F-Prime", website: "benchling.com", url: "https://www.benchling.com" },
    { id: 17, name: "Sapio Sciences", workflow: "Bench Work & Analysis", fundingStage: "Series C+", description: "All-in-one platform combining LIMS, ELN, SDMS", differentiator: "Integrated platform", valuation: "Funded by GHO Capital", investors: "GHO Capital Partners", website: "sapiosciences.com", url: "https://www.sapiosciences.com" },
    { id: 18, name: "Sapio Sciences", workflow: "Sample Intake & Accessioning", fundingStage: "Series C+", description: "Science-aware lab informatics platform", differentiator: "AI-powered", valuation: "Funded by GHO Capital", investors: "GHO Capital Partners", website: "sapiosciences.com", url: "https://www.sapiosciences.com" },

    // PUBLIC/MATURE COMPANIES
    { id: 19, name: "LabWare", workflow: "Sample Intake & Accessioning", fundingStage: "Public/Mature", description: "Legacy on-premise LIMS platform", differentiator: "Enterprise-grade", valuation: "Established", investors: "", website: "labware.com", url: "https://www.labware.com" },
    { id: 20, name: "LabWare", workflow: "Bench Work & Analysis", fundingStage: "Public/Mature", description: "Legacy on-premise LIMS platform", differentiator: "Enterprise-grade", valuation: "Established", investors: "", website: "labware.com", url: "https://www.labware.com" },
    { id: 21, name: "LabWare", workflow: "QA/QC Review", fundingStage: "Public/Mature", description: "Legacy on-premise LIMS platform", differentiator: "Enterprise-grade", valuation: "Established", investors: "", website: "labware.com", url: "https://www.labware.com" },
    { id: 22, name: "LabWare", workflow: "Reporting & COA", fundingStage: "Public/Mature", description: "Legacy on-premise LIMS platform", differentiator: "Enterprise-grade", valuation: "Established", investors: "", website: "labware.com", url: "https://www.labware.com" },
    { id: 23, name: "STARLIMS", workflow: "Sample Intake & Accessioning", fundingStage: "Public/Mature", description: "On-premise LIMS for regulated industries", differentiator: "Compliance-focused", valuation: "Mature", investors: "", website: "starlims.com", url: "https://www.starlims.com" },
    { id: 24, name: "STARLIMS", workflow: "Bench Work & Analysis", fundingStage: "Public/Mature", description: "On-premise LIMS for regulated industries", differentiator: "Compliance-focused", valuation: "Mature", investors: "", website: "starlims.com", url: "https://www.starlims.com" },
    { id: 25, name: "STARLIMS", workflow: "QA/QC Review", fundingStage: "Public/Mature", description: "On-premise LIMS for regulated industries", differentiator: "Compliance-focused", valuation: "Mature", investors: "", website: "starlims.com", url: "https://www.starlims.com" },
    { id: 26, name: "STARLIMS", workflow: "Reporting & COA", fundingStage: "Public/Mature", description: "On-premise LIMS for regulated industries", differentiator: "Compliance-focused", valuation: "Mature", investors: "", website: "starlims.com", url: "https://www.starlims.com" },
    { id: 27, name: "Sequenza", workflow: "Bench Work & Analysis", fundingStage: "Public/Mature", description: "LIMS for DNA/genetic sequencing labs", differentiator: "Genomics-specific", valuation: "", investors: "", website: "sequenzalims.com", url: "https://sequenzalims.com" },
    { id: 28, name: "LabVantage", workflow: "Sample Intake & Accessioning", fundingStage: "Public/Mature", description: "Enterprise LIMS with sample tracking", differentiator: "Chain of custody", valuation: "Established", investors: "", website: "labvantage.com", url: "https://www.labvantage.com" },
    { id: 29, name: "LabVantage", workflow: "Bench Work & Analysis", fundingStage: "Public/Mature", description: "Enterprise LIMS with sample tracking", differentiator: "Chain of custody", valuation: "Established", investors: "", website: "labvantage.com", url: "https://www.labvantage.com" },
    { id: 30, name: "Thermo Fisher SampleManager", workflow: "Bench Work & Analysis", fundingStage: "Public/Mature", description: "LIMS for pharma, food, environmental testing", differentiator: "Multi-industry", valuation: "Public company", investors: "", website: "thermofisher.com", url: "https://www.thermofisher.com" },
    { id: 31, name: "Thermo Fisher SampleManager", workflow: "Sample Intake & Accessioning", fundingStage: "Public/Mature", description: "Enterprise LIMS for regulated industries", differentiator: "Global scale", valuation: "Public company", investors: "", website: "thermofisher.com", url: "https://www.thermofisher.com" },
];

// Application state
let companies = [];
let editingCompanyId = null;
let selectedCompanyId = null;

// Workflow and funding stage mappings
const workflows = [
    "Sample Intake & Accessioning",
    "Bench Work & Analysis",
    "QA/QC Review",
    "Reporting & COA",
    "Invoicing & Delivery"
];

const fundingStages = [
    "Seed/Early",
    "Series A-B",
    "Series C+",
    "Public/Mature"
];

// Legacy process descriptions for row 0
const legacyProcesses = {
    "Sample Intake & Accessioning": "Excel forms, paper clipboards, manual ID assignment",
    "Bench Work & Analysis": "Lab notebooks → manual computer entry",
    "QA/QC Review": "Calculator checks, manual Excel validations",
    "Reporting & COA": "Word templates, print/sign/scan workflow",
    "Invoicing & Delivery": "Manual tallying, email PDF attachments"
};

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    loadCompanies();
    renderGrid();
    setupEventListeners();
});

// Load companies from localStorage or use defaults
function loadCompanies() {
    const saved = localStorage.getItem('limsMarketMapCompaniesV2');
    if (saved) {
        companies = JSON.parse(saved);
    } else {
        companies = [...defaultCompanies];
        saveCompanies();
    }
    updateCompanyCount();
}

// Save companies to localStorage
function saveCompanies() {
    localStorage.setItem('limsMarketMapCompaniesV2', JSON.stringify(companies));
    updateCompanyCount();
}

// Update company count display
function updateCompanyCount() {
    const count = companies.length;
    document.getElementById('companyCount').textContent = `Tracking ${count} ${count === 1 ? 'company' : 'companies'}`;
}

// Render the grid
function renderGrid() {
    const gridContainer = document.getElementById('gridContainer');
    gridContainer.innerHTML = '';

    // First row: Legacy/Manual processes (special rendering)
    workflows.forEach((workflow) => {
        const cell = document.createElement('div');
        cell.className = 'grid-cell legacy-row';
        cell.textContent = legacyProcesses[workflow];
        gridContainer.appendChild(cell);
    });

    // Remaining 4 rows: Funding stages with company cards
    fundingStages.forEach((stage, rowIndex) => {
        workflows.forEach((workflow, colIndex) => {
            const cell = document.createElement('div');
            cell.className = 'grid-cell';
            cell.dataset.workflow = workflow;
            cell.dataset.stage = stage;

            // Get companies for this cell
            const cellCompanies = companies.filter(c =>
                c.workflow === workflow && c.fundingStage === stage
            );

            if (cellCompanies.length === 0) {
                cell.innerHTML = '<div class="empty-state">+</div>';
            } else {
                cellCompanies.forEach(company => {
                    cell.appendChild(createCompanyCard(company));
                });
            }

            gridContainer.appendChild(cell);
        });
    });
}

// Create a company card element
function createCompanyCard(company) {
    const card = document.createElement('div');
    card.className = 'company-card';
    card.dataset.id = company.id;

    // Add stage-specific class for color coding
    const stageClass = company.fundingStage.toLowerCase().replace(/[\/\s+]/g, '-');
    card.classList.add(stageClass);

    // Create header with logo and name
    const headerDiv = document.createElement('div');
    headerDiv.className = 'company-header';

    // Logo
    if (company.website) {
        const logoImg = document.createElement('img');
        logoImg.className = 'company-logo';
        logoImg.src = `https://logo.clearbit.com/${company.website}`;
        logoImg.alt = company.name;
        logoImg.onerror = function() {
            // Fallback: show first letter if logo fails to load
            const placeholder = document.createElement('div');
            placeholder.className = 'company-logo placeholder';
            placeholder.textContent = company.name.charAt(0);
            this.replaceWith(placeholder);
        };
        headerDiv.appendChild(logoImg);
    }

    // Company name with clickable link
    const nameDiv = document.createElement('div');
    nameDiv.className = 'company-name';

    if (company.url) {
        const nameLink = document.createElement('a');
        nameLink.href = company.url;
        nameLink.target = '_blank';
        nameLink.className = 'company-name-link';
        nameLink.textContent = company.name;
        nameLink.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent triggering competitive view
        });
        nameDiv.appendChild(nameLink);
    } else {
        nameDiv.textContent = company.name;
    }

    headerDiv.appendChild(nameDiv);

    const descDiv = document.createElement('div');
    descDiv.className = 'company-description';
    descDiv.textContent = company.description;

    const badgesDiv = document.createElement('div');
    badgesDiv.className = 'company-badges';

    // Stage badge
    const stageBadge = document.createElement('span');
    stageBadge.className = `badge ${stageClass}`;
    stageBadge.textContent = company.fundingStage;
    badgesDiv.appendChild(stageBadge);

    // Differentiator badge
    if (company.differentiator) {
        const diffBadge = document.createElement('span');
        diffBadge.className = 'badge differentiator';
        diffBadge.textContent = company.differentiator;
        badgesDiv.appendChild(diffBadge);
    }

    card.appendChild(headerDiv);
    card.appendChild(descDiv);
    card.appendChild(badgesDiv);

    // Click to show competitors or edit
    card.addEventListener('click', (e) => {
        e.stopPropagation();
        if (e.shiftKey) {
            // Shift+click to edit
            openEditModal(company);
        } else {
            // Regular click to highlight competitors
            toggleCompetitiveView(company);
        }
    });

    return card;
}

// Toggle competitive cluster view
function toggleCompetitiveView(company) {
    // If clicking the same company, clear the view
    if (selectedCompanyId === company.id) {
        clearCompetitiveView();
        return;
    }

    // Clear any existing highlights
    clearCompetitiveView();

    // Mark this company as selected
    selectedCompanyId = company.id;

    // Highlight the selected company
    const selectedCard = document.querySelector(`.company-card[data-id="${company.id}"]`);
    if (selectedCard) {
        selectedCard.classList.add('selected');
    }

    // Find workflow index to determine adjacent workflows
    const workflowIndex = workflows.indexOf(company.workflow);
    const adjacentWorkflows = [];
    if (workflowIndex > 0) adjacentWorkflows.push(workflows[workflowIndex - 1]);
    if (workflowIndex < workflows.length - 1) adjacentWorkflows.push(workflows[workflowIndex + 1]);

    // Highlight competitors and adjacent companies
    companies.forEach(c => {
        if (c.id === company.id) return;

        const card = document.querySelector(`.company-card[data-id="${c.id}"]`);
        if (!card) return;

        // Same workflow = direct competitor
        if (c.workflow === company.workflow) {
            card.classList.add('competitor');
            const cell = card.closest('.grid-cell');
            if (cell) cell.classList.add('has-competitor');
        }
        // Adjacent workflow = adjacent market
        else if (adjacentWorkflows.includes(c.workflow)) {
            card.classList.add('adjacent');
            const cell = card.closest('.grid-cell');
            if (cell) cell.classList.add('has-adjacent');
        }
    });
}

// Clear competitive view
function clearCompetitiveView() {
    selectedCompanyId = null;
    document.querySelectorAll('.company-card').forEach(card => {
        card.classList.remove('selected', 'competitor', 'adjacent');
    });
    document.querySelectorAll('.grid-cell').forEach(cell => {
        cell.classList.remove('has-competitor', 'has-adjacent');
    });
}

// Calculate and render market insights
function calculateInsights() {
    // 1. Workflow Coverage (company count per workflow)
    const workflowCounts = {};
    workflows.forEach(w => {
        workflowCounts[w] = companies.filter(c => c.workflow === w).length;
    });
    const sortedWorkflows = Object.entries(workflowCounts)
        .sort((a, b) => b[1] - a[1]);

    const workflowHTML = sortedWorkflows.map(([workflow, count]) => {
        const percentage = companies.length > 0 ? Math.round((count / companies.length) * 100) : 0;
        const heat = count >= 8 ? 'hot' : count >= 5 ? 'warm' : 'cool';
        return `
            <div class="insight-item">
                <div class="insight-label">${workflow} <span class="insight-metric ${heat}">${count}</span></div>
                <div class="insight-bar">
                    <div class="insight-bar-fill" style="width: ${percentage * 2}%"></div>
                </div>
            </div>
        `;
    }).join('');
    document.getElementById('workflowCoverage').innerHTML = workflowHTML;

    // 2. Funding Concentration (distribution across stages)
    const fundingCounts = {};
    fundingStages.forEach(s => {
        fundingCounts[s] = companies.filter(c => c.fundingStage === s).length;
    });
    const totalCompanies = companies.length;

    const fundingHTML = Object.entries(fundingCounts).map(([stage, count]) => {
        const percentage = totalCompanies > 0 ? Math.round((count / totalCompanies) * 100) : 0;
        return `
            <div class="insight-item">
                <div class="insight-label">${stage}</div>
                <div class="insight-value">${count} companies (${percentage}%)</div>
                <div class="insight-bar">
                    <div class="insight-bar-fill" style="width: ${percentage}%"></div>
                </div>
            </div>
        `;
    }).join('');
    document.getElementById('fundingConcentration').innerHTML = fundingHTML;

    // 3. Whitespace Opportunities (cells with 0-1 companies)
    const whitespace = [];
    workflows.forEach(workflow => {
        fundingStages.forEach(stage => {
            const count = companies.filter(c => c.workflow === workflow && c.fundingStage === stage).length;
            if (count <= 1) {
                whitespace.push({ workflow, stage, count });
            }
        });
    });

    const whitespaceHTML = whitespace.length > 0 ? whitespace.slice(0, 10).map(({ workflow, stage, count }) => {
        return `
            <div class="insight-item">
                <div class="insight-label">${stage} × ${workflow.split(' &')[0]}</div>
                <div class="insight-value">${count === 0 ? 'No companies - clear whitespace' : 'Only 1 company - low competition'}</div>
            </div>
        `;
    }).join('') : '<div class="insight-item"><div class="insight-value">All categories well-populated</div></div>';
    document.getElementById('whitespaceOpps').innerHTML = whitespaceHTML;

    // 4. Market Maturity Analysis
    const legacyCount = companies.filter(c => c.fundingStage === 'Public/Mature').length;
    const cloudCount = companies.filter(c => c.fundingStage === 'Series C+' || c.fundingStage === 'Series A-B').length;
    const seedCount = companies.filter(c => c.fundingStage === 'Seed/Early').length;

    const legacyPercentage = totalCompanies > 0 ? Math.round((legacyCount / totalCompanies) * 100) : 0;
    const cloudPercentage = totalCompanies > 0 ? Math.round((cloudCount / totalCompanies) * 100) : 0;
    const seedPercentage = totalCompanies > 0 ? Math.round((seedCount / totalCompanies) * 100) : 0;

    const maturityHTML = `
        <div class="insight-item">
            <div class="insight-label">Legacy LIMS (Public/Mature)</div>
            <div class="insight-value">${legacyCount} companies (${legacyPercentage}%) - Incumbents dominate</div>
        </div>
        <div class="insight-item">
            <div class="insight-label">Cloud-Native Challengers (Series A-C+)</div>
            <div class="insight-value">${cloudCount} companies (${cloudPercentage}%) - Modern alternatives emerging</div>
        </div>
        <div class="insight-item">
            <div class="insight-label">Early Stage (Seed/Early)</div>
            <div class="insight-value">${seedCount} companies (${seedPercentage}%) - ${seedCount === 0 ? 'Market consolidating, limited new innovation' : seedCount < 5 ? 'Limited early-stage activity' : 'Healthy early-stage ecosystem'}</div>
        </div>
    `;
    document.getElementById('maturityAnalysis').innerHTML = maturityHTML;

    // 5. Competitive Intensity (crowded cells)
    const cellCounts = [];
    workflows.forEach(workflow => {
        fundingStages.forEach(stage => {
            const count = companies.filter(c => c.workflow === workflow && c.fundingStage === stage).length;
            if (count > 0) {
                cellCounts.push({ workflow, stage, count });
            }
        });
    });
    const sortedCells = cellCounts.sort((a, b) => b.count - a.count).slice(0, 5);

    const intensityHTML = sortedCells.map(({ workflow, stage, count }) => {
        const heat = count >= 4 ? 'hot' : count >= 3 ? 'warm' : 'cool';
        const intensity = count === 1 ? 'No competition' : count >= 4 ? 'Highly crowded' : count >= 3 ? 'Moderate competition' : 'Low competition';
        return `
            <div class="insight-item">
                <div class="insight-label">${stage} × ${workflow.split(' &')[0]} <span class="insight-metric ${heat}">${count}</span></div>
                <div class="insight-value">${intensity}</div>
            </div>
        `;
    }).join('');
    document.getElementById('competitiveIntensity').innerHTML = intensityHTML;
}

// Setup event listeners
function setupEventListeners() {
    // Add company button
    document.getElementById('addCompanyBtn').addEventListener('click', () => {
        openAddModal();
    });

    // Export PDF button
    document.getElementById('exportPdfBtn').addEventListener('click', () => {
        exportToPDF();
    });

    // Insights button
    document.getElementById('toggleInsightsBtn').addEventListener('click', () => {
        const panel = document.getElementById('insightsPanel');
        const isShowing = panel.classList.contains('show');

        if (isShowing) {
            panel.classList.remove('show');
        } else {
            calculateInsights();
            panel.classList.add('show');
        }
    });

    // Close insights button
    document.getElementById('closeInsightsBtn').addEventListener('click', () => {
        document.getElementById('insightsPanel').classList.remove('show');
    });

    // Clear all button
    document.getElementById('clearAllBtn').addEventListener('click', () => {
        if (confirm('Are you sure you want to clear ALL companies? This will remove everything including the pre-loaded companies.')) {
            companies = [];
            saveCompanies();
            renderGrid();
        }
    });

    // Clear competitive view when clicking on grid background
    document.getElementById('gridContainer').addEventListener('click', (e) => {
        if (e.target.classList.contains('grid-cell') || e.target.classList.contains('empty-state')) {
            clearCompetitiveView();
        }
    });

    // Modal controls
    const modal = document.getElementById('companyModal');
    const closeBtn = document.querySelector('.close');
    const cancelBtn = document.getElementById('cancelBtn');
    const deleteBtn = document.getElementById('deleteBtn');
    const form = document.getElementById('companyForm');

    closeBtn.addEventListener('click', () => closeModal());
    cancelBtn.addEventListener('click', () => closeModal());

    deleteBtn.addEventListener('click', () => {
        if (editingCompanyId && confirm('Are you sure you want to delete this company?')) {
            companies = companies.filter(c => c.id !== editingCompanyId);
            saveCompanies();
            renderGrid();
            closeModal();
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        saveCompanyFromForm();
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// Open modal to add new company
function openAddModal() {
    editingCompanyId = null;
    document.getElementById('modalTitle').textContent = 'Add New Company';
    document.getElementById('companyForm').reset();
    document.getElementById('companyId').value = '';
    document.getElementById('deleteBtn').style.display = 'none';
    document.getElementById('companyModal').classList.add('show');
}

// Open modal to edit existing company
function openEditModal(company) {
    editingCompanyId = company.id;
    document.getElementById('modalTitle').textContent = 'Edit Company';
    document.getElementById('companyId').value = company.id;
    document.getElementById('companyName').value = company.name;
    document.getElementById('companyUrl').value = company.url || '';
    document.getElementById('website').value = company.website || '';
    document.getElementById('workflow').value = company.workflow;
    document.getElementById('fundingStage').value = company.fundingStage;
    document.getElementById('description').value = company.description;
    document.getElementById('differentiator').value = company.differentiator || '';
    document.getElementById('valuation').value = company.valuation || '';
    document.getElementById('investors').value = company.investors || '';
    document.getElementById('deleteBtn').style.display = 'block';
    document.getElementById('companyModal').classList.add('show');
}

// Close modal
function closeModal() {
    document.getElementById('companyModal').classList.remove('show');
    editingCompanyId = null;
}

// Save company from form
function saveCompanyFromForm() {
    const formData = {
        name: document.getElementById('companyName').value,
        url: document.getElementById('companyUrl').value,
        website: document.getElementById('website').value,
        workflow: document.getElementById('workflow').value,
        fundingStage: document.getElementById('fundingStage').value,
        description: document.getElementById('description').value,
        differentiator: document.getElementById('differentiator').value,
        valuation: document.getElementById('valuation').value,
        investors: document.getElementById('investors').value
    };

    if (editingCompanyId) {
        // Update existing company
        const index = companies.findIndex(c => c.id === editingCompanyId);
        if (index !== -1) {
            companies[index] = { ...companies[index], ...formData };
        }
    } else {
        // Add new company
        const newCompany = {
            id: Date.now(),
            ...formData
        };
        companies.push(newCompany);
    }

    saveCompanies();
    renderGrid();
    closeModal();
}

// Export to PDF function
function exportToPDF() {
    // Hide insights panel before printing
    const panel = document.getElementById('insightsPanel');
    const wasShowing = panel.classList.contains('show');
    panel.classList.remove('show');

    // Use browser's native print dialog with print-friendly styles
    window.print();

    // Restore insights panel state
    if (wasShowing) {
        panel.classList.add('show');
    }
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
