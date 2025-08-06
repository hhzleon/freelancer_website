// Language switcher functionality
let currentLanguage = 'zh'; // Default language

// Initialize language switcher
function initLanguageSwitcher() {
  // Check if translations object is available
  if (typeof translations === 'undefined') {
    console.error('Translations object not found. Please ensure translations.js is loaded before language-switcher.js');
    return;
  }
  
  // Load saved language preference
  const savedLanguage = localStorage.getItem('preferredLanguage');
  if (savedLanguage && translations[savedLanguage]) {
    currentLanguage = savedLanguage;
  }
  
  // Set up event listener for language select
  const select = document.getElementById('languageSelect');
  if (select) {
    select.value = currentLanguage;
    select.addEventListener('change', function() {
      const newLanguage = this.value;
      switchLanguage(newLanguage);
    });
  }
  
  // Apply current language
  applyLanguage(currentLanguage);
  
  // Update the current language display
  const currentLanguageText = document.getElementById('currentLanguageText');
  if (currentLanguageText) {
    updateCurrentLanguageText(currentLanguageText, currentLanguage);
  }
}

// Update current language text
function updateCurrentLanguageText(element, language) {
  if (!element) return;
  
  const languageNames = {
    'zh': '中文',
    'en': 'English'
  };
  
  const displayText = languageNames[language] || language;
  element.textContent = displayText;
  console.log('Updated language display to:', displayText, 'for language:', language);
}

// Switch language
function switchLanguage(language) {
  if (typeof translations === 'undefined') {
    console.error('Translations object not found');
    return;
  }
  
  if (!translations[language]) return;
  
  currentLanguage = language;
  localStorage.setItem('preferredLanguage', language);
  
  // Update select value
  const select = document.getElementById('languageSelect');
  if (select) {
    select.value = language;
  }
  
  // Update current language text
  const currentLanguageText = document.getElementById('currentLanguageText');
  if (currentLanguageText) {
    updateCurrentLanguageText(currentLanguageText, language);
  }
  
  // Apply the language change
  applyLanguage(language);
}

// Apply language to page
function applyLanguage(language) {
  if (typeof translations === 'undefined') {
    console.error('Translations object not found');
    return;
  }
  
  const t = translations[language];
  if (!t) return;
  
  // Update navigation
  updateElementText('[data-translate="home"]', t.home);
  updateElementText('[data-translate="resume"]', t.resume);
  
  // Update page title
  const pageTitle = document.querySelector('title');
  if (pageTitle) {
    if (window.location.pathname.includes('cv.html')) {
      pageTitle.textContent = t.cv_title;
    } else {
      pageTitle.textContent = t.hero_title;
    }
  }
  
  // Update hero section (index page)
  updateElementText('[data-translate="hero_title"]', t.hero_title);
  updateElementText('[data-translate="hero_subtitle"]', t.hero_subtitle);
  updateElementText('[data-translate="view_resume"]', t.view_resume);
  
  // Update projects section
  updateElementText('[data-translate="my_projects"]', t.my_projects);
  updateElementText('[data-translate="all"]', t.all);
  updateElementText('[data-translate="cybersecurity"]', t.cybersecurity);
  updateElementText('[data-translate="web_dev"]', t.web_dev);
  updateElementText('[data-translate="automation"]', t.automation);
  updateElementText('[data-translate="academic"]', t.academic);
  updateElementText('[data-translate="view_code"]', t.view_code);
  updateElementText('[data-translate="view_demo"]', t.view_demo);
  updateElementText('[data-translate="view_details"]', t.view_details);
  updateElementText('[data-translate="in_progress"]', t.in_progress);
  updateElementText('[data-translate="secondary_dev"]', t.secondary_dev);
  
  // Update project descriptions
  updateElementText('[data-translate="t5ezxss_desc"]', t.t5ezxss_desc);
  updateElementText('[data-translate="t5ezxss_title"]', t.t5ezxss_title);
  updateElementText('[data-translate="game_translation_desc"]', t.game_translation_desc);
  updateElementText('[data-translate="game_translation_title"]', t.game_translation_title);
  updateElementText('[data-translate="data_prediction_desc"]', t.data_prediction_desc);
  updateElementText('[data-translate="data_prediction_title"]', t.data_prediction_title);
  updateElementText('[data-translate="sentiment_monitor_desc"]', t.sentiment_monitor_desc);
  updateElementText('[data-translate="sentiment_monitor_full"]', t.sentiment_monitor_full);
  updateElementText('[data-translate="sentiment_monitor_title"]', t.sentiment_monitor_title);
  updateElementText('[data-translate="alias_desc"]', t.alias_desc);
  updateElementText('[data-translate="alias_full"]', t.alias_full);
  updateElementText('[data-translate="alias_title"]', t.alias_title);
  updateElementText('[data-translate="twitter_automation_title"]', t.twitter_automation_title);
  updateElementText('[data-translate="twitter_automation_desc"]', t.twitter_automation_desc);
  updateElementText('[data-translate="twitter_automation_full"]', t.twitter_automation_full);
  updateElementText('[data-translate="vulnerability_mining_title"]', t.vulnerability_mining_title);
  updateElementText('[data-translate="vulnerability_mining_desc"]', t.vulnerability_mining_desc);
  updateElementText('[data-translate="demo_tag"]', t.demo_tag);
  updateElementText('[data-translate="not_public"]', t.not_public);
  updateElementText('[data-translate="not_public_details"]', t.not_public_details);
  
  // Update ongoing projects section
  updateElementText('[data-translate="ongoing_projects"]', t.ongoing_projects);
  updateElementText('[data-translate="app_development_title"]', t.app_development_title);
  updateElementText('[data-translate="app_development_desc"]', t.app_development_desc);
  updateElementText('[data-translate="ai_c2_controller_title"]', t.ai_c2_controller_title);
  updateElementText('[data-translate="ai_c2_controller_desc"]', t.ai_c2_controller_desc);
  updateElementText('[data-translate="progress_65"]', t.progress_65);
  updateElementText('[data-translate="progress_45"]', t.progress_45);
  
  // Update skills section
  updateElementText('[data-translate="tech_stack"]', t.tech_stack);
  
  // Update about section
  updateElementText('[data-translate="about_me"]', t.about_me);
  updateElementText('[data-translate="about_text_1"]', t.about_text_1);
  updateElementText('[data-translate="about_text_2"]', t.about_text_2);
  updateElementText('[data-translate="about_text_3"]', t.about_text_3);
  updateElementText('[data-translate="about_text_4"]', t.about_text_4);
  updateElementText('[data-translate="years_exp"]', t.years_exp);
  updateElementText('[data-translate="completed_projects"]', t.completed_projects);
  updateElementText('[data-translate="client_satisfaction"]', t.client_satisfaction);
  
  // Update contact section
  updateElementText('[data-translate="contact_me"]', t.contact_me);
  updateElementText('[data-translate="email"]', t.email);
  updateElementText('[data-translate="github"]', t.github);
  updateElementText('[data-translate="wechat"]', t.wechat);
  
  // Update CV page content
  updateElementText('[data-translate="education"]', t.education);
  updateElementText('[data-translate="major"]', t.major);
  updateElementText('[data-translate="school"]', t.school);
  updateElementText('[data-translate="profession"]', t.profession);
  updateElementText('[data-translate="email_label"]', t.email_label);
  updateElementText('[data-translate="skills"]', t.skills);
  updateElementText('[data-translate="career_objective"]', t.career_objective);
  updateElementText('[data-translate="cybersecurity_engineer"]', t.cybersecurity_engineer);
  updateElementText('[data-translate="work_experience"]', t.work_experience);
  updateElementText('[data-translate="job_content"]', t.job_content);
  updateElementText('[data-translate="club_experience"]', t.club_experience);
  updateElementText('[data-translate="achievements"]', t.achievements);
  updateElementText('[data-translate="certificates"]', t.certificates);
  updateElementText('[data-translate="personal_advantages"]', t.personal_advantages);
  updateElementText('[data-translate="other_achievements"]', t.other_achievements);
  
  // Update CV specific content
  updateElementText('[data-translate="current_student"]', t.current_student);
  updateElementText('[data-translate="info_security"]', t.info_security);
  updateElementText('[data-translate="network_application"]', t.network_application);
  updateElementText('[data-translate="technical_school"]', t.technical_school);
  updateElementText('[data-translate="school_name"]', t.school_name);
  updateElementText('[data-translate="company_name"]', t.company_name);
  updateElementText('[data-translate="profile_picture"]', t.profile_picture);
  updateElementText('[data-translate="class_monitor"]', t.class_monitor);
  updateElementText('[data-translate="intern"]', t.intern);
  updateElementText('[data-translate="job_desc_1"]', t.job_desc_1);
  updateElementText('[data-translate="job_desc_2"]', t.job_desc_2);
  updateElementText('[data-translate="job_desc_3"]', t.job_desc_3);
  updateElementText('[data-translate="job_desc_4"]', t.job_desc_4);
  updateElementText('[data-translate="intern_desc_1"]', t.intern_desc_1);
  updateElementText('[data-translate="intern_desc_2"]', t.intern_desc_2);
  updateElementText('[data-translate="intern_desc_3"]', t.intern_desc_3);
  updateElementText('[data-translate="tsc_founder"]', t.tsc_founder);
  updateElementText('[data-translate="tsc_desc"]', t.tsc_desc);
  updateElementText('[data-translate="tsc_club"]', t.tsc_club);
  updateElementText('[data-translate="qidian_leader"]', t.qidian_leader);
  updateElementText('[data-translate="qidian_desc"]', t.qidian_desc);
  updateElementText('[data-translate="qidian_club"]', t.qidian_club);
  updateElementText('[data-translate="master_studio"]', t.master_studio);
  updateElementText('[data-translate="master_studio_desc"]', t.master_studio_desc);
  updateElementText('[data-translate="master_studio_name"]', t.master_studio_name);
  
  // Update awards
  updateElementText('[data-translate="award_1"]', t.award_1);
  updateElementText('[data-translate="award_2"]', t.award_2);
  updateElementText('[data-translate="award_3"]', t.award_3);
  updateElementText('[data-translate="award_4"]', t.award_4);
  updateElementText('[data-translate="award_5"]', t.award_5);
  updateElementText('[data-translate="award_6"]', t.award_6);
  
  // Update other achievements
  updateElementText('[data-translate="police_letter"]', t.police_letter);
  updateElementText('[data-translate="software_patent"]', t.software_patent);
  updateElementText('[data-translate="national_scholarship"]', t.national_scholarship);
  
  // Update certificates
  updateElementText('[data-translate="cert_1"]', t.cert_1);
  updateElementText('[data-translate="cert_2"]', t.cert_2);
  updateElementText('[data-translate="cert_3"]', t.cert_3);
  updateElementText('[data-translate="cert_4"]', t.cert_4);
  
  // Update personal advantages
  updateElementText('[data-translate="advantage_1"]', t.advantage_1);
  updateElementText('[data-translate="advantage_2"]', t.advantage_2);
}

// Helper function to update element text
function updateElementText(selector, text) {
  const elements = document.querySelectorAll(selector);
  elements.forEach(element => {
    if (element.tagName === 'INPUT' && element.type === 'placeholder') {
      element.placeholder = text;
    } else if (element.tagName === 'IMG' && element.hasAttribute('data-translate-alt')) {
      element.alt = text;
    } else {
      element.textContent = text;
    }
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Wait a bit to ensure translations are loaded
  setTimeout(() => {
    initLanguageSwitcher();
  }, 100);
}); 