# PHARMAWISE
## Educated Medication Use

PHARMAWISE is a health literacy and medication understanding platform designed to help patients, doctors, pharmacists, and healthcare institutions clearly understand medications using trusted public data (openFDA), OCR, and educational AI assistance.

⚠️ **PHARMAWISE does NOT diagnose, prescribe, or replace medical professionals.**  
It is an educational and informational system built to improve medication understanding and safety.

## 🌍 Vision

Millions of people struggle to:

- Read handwritten prescriptions
- Understand what their medication is for
- Know how to take medicine safely
- Access information in their local language

PHARMAWISE bridges the gap between medical intent and patient understanding.

## 🎯 Core Objectives

- Improve medication literacy
- Reduce medication misuse
- Support multilingual populations
- Assist doctors and pharmacists in patient education
- Provide government-ready, ethical health technology

## 🧠 Key Features
### For Patients & General Users

- 🔍 Drug search (brand or generic)
- 📘 Simple, human-friendly medication explanations
- 🌐 Multilingual support
- 📷 Prescription upload (image or PDF)
- 🔊 Voice explanations (accessibility)
- 💾 Save medicines for offline access
- ⚠️ FDA-based safety and warning summaries

### For Doctors & Pharmacists

- 🩺 Doctor mode for patient-friendly summaries
- 🔗 Shareable links and QR codes for prescriptions
- 📄 Clean, readable medication explanations
- 🧩 Templates for consistent patient education

### AI-Assisted (Educational Only)

- 🧠 Symptom-to-medication relevance matching
- 📊 Confidence scores for OCR and AI outputs
- 🚫 No diagnosis, no prescribing, no dosage decisions

## 🏗️ System Architecture
```
PHARMAWISE
├── Web Application (React + Vite)
├── Mobile Application (React Native + Expo)
├── Backend API (Node.js + Express)
├── OCR Layer (Puter.js + fallback services)
├── AI Education Layer
└── Public Medical Data (openFDA)
```

## 🧩 Technology Stack
### Frontend – Web

- React + Vite
- Tailwind CSS
- Framer Motion
- i18next (multilingual)
- PWA support

### Frontend – Mobile

- React Native + Expo
- Offline-first design
- Camera & file upload
- Accessibility support

### Backend

- Node.js + Express
- MongoDB Atlas
- Redis (caching FDA data)
- JWT Authentication
- Role-Based Access Control (RBAC)

### OCR

- **Primary:** Puter.js (client-side, unlimited)
- **Fallback:** Optiic OCR, OCR Space (limited)

### External Data

- openFDA API
  - /drug/label.json
  - /drug/ndc.json
  - /drug/event.json (future)
  - /enforcement.json (recalls)

## 🧪 Data Philosophy

- Uses only publicly available medical data
- Displays source citations
- Avoids speculative or incomplete information
- Shows “Information not available” when data is missing

## 🛡️ Safety, Ethics & Compliance

PHARMAWISE is designed with healthcare safety as a first-class concern.

### Medical Safety

- No diagnosis
- No treatment recommendation
- No emergency advice
- Human confirmation loops for OCR and AI

### Compliance Alignment

- HIPAA-aligned (conceptual)
- WHO Digital Health Principles
- FDA Open Data usage compliance
- GDPR-style consent and data minimization

### Privacy

- Anonymous usage supported
- No PHI stored without explicit consent
- Encryption in transit and at rest
- OCR runs client-side when possible

## 🧑‍⚕️ Intended Users

- Patients
- Caregivers
- Doctors
- Pharmacists
- Clinics & Hospitals
- Ministries of Health
- Public health organizations

## 💼 Monetization Model (Ethical)

### Free Plan

- Drug search & explanations
- Multilingual UI
- Basic prescription OCR preview
- Safety and warning information

### Pro Plan

- Full prescription OCR
- AI symptom education
- Saved medicine history
- Offline access
- Voice assistance

### Professional / Institutional

- Doctor dashboards
- Shareable patient summaries
- Analytics
- Hospital & government licensing

🔒 **Basic medication safety information is never paywalled.**

## 📂 Repository Structure
```
root/
├── backend/        # Node.js + Express API
├── web/            # React + Vite web application
├── mobile/         # React Native mobile app
├── docs/           # Proposals, architecture, compliance
├── scripts/        # Dev and deployment scripts
└── README.md
```

## 🚀 Getting Started (High-Level)

Detailed setup instructions will be added per package.

### Clone the repository
```
git clone https://github.com/your-org/pharmawise.git
```

### Install backend dependencies
```
cd backend
npm install
```

### Install web app dependencies
```
cd ../web
npm install
```

### Install mobile app dependencies
```
cd ../mobile
npm install
```

## 🧭 Roadmap
### Phase 1 – MVP

- Drug search
- FDA integration
- Multilingual UI
- Web application

### Phase 2

- Mobile app
- OCR prescription reading
- User accounts
- Doctor sharing links

### Phase 3

- AI symptom education
- Voice support
- Institutional dashboards
- National rollout pilots

## 🤝 Institutional Collaboration

PHARMAWISE is designed to be:

- Deployable in hospitals
- Adaptable for government health systems
- Localizable for different regions
- Auditable and transparent

## 📜 Disclaimer

PHARMAWISE provides educational health information only.  
It does not replace professional medical advice, diagnosis, or treatment.

Always consult a qualified healthcare provider with any medical questions.

## 📧 Contact & Collaboration

For partnerships with:

- Hospitals
- Government bodies
- NGOs
- Public health institutions

Please contact the project maintainers.