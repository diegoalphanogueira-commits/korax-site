import React from 'react'
import ReactDOM from 'react-dom/client'
import KoraxLandingV6 from './KoraxLandingV6.jsx'
import TrainingCopyPatch from './TrainingCopyPatch.jsx'
import FounderSectionPatch from './FounderSectionPatch.jsx'
import CasesCopyPatch from './CasesCopyPatch.jsx'
import PainCopyPatch from './PainCopyPatch.jsx'
import PainConversationPatch from './PainConversationPatch.jsx'
import './korax-landing-v5.css'
import './v5plus-authority-footer.css'
import './korax-landing-v6.css'
import './pain-premium.css'
import './pain-whatsapp-live.css'
import './frustration-premium.css'
import './frustration-desktop-fix.css'
import './training-desktop-fix.css'
import './employee-mobile-fix.css'
import './segments-mobile-fix.css'
import './founder-refinement.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <KoraxLandingV6 />
    <TrainingCopyPatch />
    <FounderSectionPatch />
    <CasesCopyPatch />
    <PainCopyPatch />
    <PainConversationPatch />
  </React.StrictMode>,
)
