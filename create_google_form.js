// ==============================================
// Tinkery Satellite Network - Interest Form
// ==============================================
// HOW TO USE:
// 1. Go to https://script.google.com
// 2. Create a new project
// 3. Paste this entire script
// 4. Click Run ▶️ (authorize when prompted)
// 5. Check the Execution Log for your form URL
// ==============================================

function createTinkeryForm() {
  var form = FormApp.create('Tinkery Satellite Network - Interest Form');
  
  form.setDescription(
    'Thank you for your interest in the Tinkery Satellite Network! ' +
    'The AI Tinkery at Stanford is building a community of educators and schools ' +
    'who are creating AI makerspaces and tinkering environments. ' +
    'Fill out this form to join our growing network.\n\n' +
    'All information is kept confidential and used only for network coordination.'
  );
  
  form.setConfirmationMessage(
    'Thank you for joining the Tinkery Satellite Network! 🤖\n\n' +
    'We\'ll be in touch soon with next steps, resources, and community updates.\n\n' +
    '— The AI Tinkery Team at Stanford'
  );

  form.setCollectEmail(true);
  form.setLimitOneResponsePerUser(true);
  form.setProgressBar(true);

  // === SECTION 1: Contact Information ===
  form.addSectionHeaderItem()
    .setTitle('Contact Information')
    .setHelpText('Tell us about yourself and your school.');

  form.addTextItem()
    .setTitle('Full Name')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Email Address')
    .setRequired(true)
    .setValidation(FormApp.createTextValidation()
      .requireTextIsEmail()
      .build());

  form.addTextItem()
    .setTitle('Job Title / Role')
    .setRequired(true)
    .setHelpText('e.g., Teacher, Instructional Coach, Principal, IT Director');

  // === SECTION 2: School Information ===
  form.addSectionHeaderItem()
    .setTitle('School & District Information');

  form.addTextItem()
    .setTitle('School Name')
    .setRequired(true);

  form.addTextItem()
    .setTitle('School District')
    .setRequired(true);

  form.addTextItem()
    .setTitle('City, State')
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('School Type')
    .setChoiceValues([
      'Public School',
      'Charter School',
      'Private School',
      'Independent School',
      'University / College',
      'Community Organization',
      'Other'
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Grade Levels Served')
    .setChoiceValues([
      'Elementary (K-5)',
      'Middle School (6-8)',
      'High School (9-12)',
      'K-8',
      'K-12',
      'Higher Education',
      'Adult Education',
      'Mixed / Other'
    ])
    .setRequired(true);

  form.addTextItem()
    .setTitle('Approximate Student Enrollment')
    .setRequired(true)
    .setValidation(FormApp.createTextValidation()
      .requireNumber()
      .build());

  form.addTextItem()
    .setTitle('Number of Teachers / Staff')
    .setRequired(false);

  // === SECTION 3: Tinkery Status ===
  form.addSectionHeaderItem()
    .setTitle('Your AI Tinkery Journey');

  form.addMultipleChoiceItem()
    .setTitle('Current State of Your AI Tinkery')
    .setChoiceValues([
      'Exploring the idea — just learning about AI makerspaces',
      'Planning implementation — actively designing a space or program',
      'Built one — have a single AI tinkering space or program running',
      'Built many — running multiple AI tinkering programs or spaces'
    ])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('What motivates you to start or grow an AI Tinkery?')
    .setRequired(true)
    .setHelpText('Tell us what inspired you and what you hope to achieve.');

  form.addParagraphTextItem()
    .setTitle('Describe your current or planned AI Tinkery setup')
    .setRequired(false)
    .setHelpText('Physical space, tools used, programs offered, student reach, etc.');

  form.addCheckboxItem()
    .setTitle('What AI tools or platforms are you currently using or exploring?')
    .setChoiceValues([
      'ChatGPT / OpenAI',
      'Claude / Anthropic',
      'Google Gemini',
      'Replit',
      'Teachable Machine',
      'Scratch / Scratch Extensions',
      'micro:bit / Arduino with AI',
      'Image generation tools (Midjourney, DALL-E, Flora)',
      'Music generation tools',
      'Robotics / Physical computing',
      'Custom-built tools',
      'None yet — still exploring',
      'Other'
    ])
    .setRequired(false);

  // === SECTION 4: Network Participation ===
  form.addSectionHeaderItem()
    .setTitle('Network Participation');

  form.addCheckboxItem()
    .setTitle('What kind of support are you most interested in?')
    .setChoiceValues([
      'Curriculum and activity resources',
      'Technical setup guidance (hardware, software, space design)',
      'Professional development for teachers',
      'Connecting with other Tinkery sites',
      'Research collaboration opportunities',
      'Funding and grant guidance',
      'Student showcase and exhibition opportunities',
      'Guest speakers or workshop facilitators'
    ])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('How would you like to participate in the network?')
    .setChoiceValues([
      'Monthly virtual meetups',
      'Slack / Discord community',
      'Email newsletter',
      'Annual in-person gathering',
      'Mentorship program (as a mentee)',
      'Mentorship program (as a mentor)',
      'Collaborative curriculum development',
      'Shared student projects across schools'
    ])
    .setRequired(false);

  form.addMultipleChoiceItem()
    .setTitle('Would you be open to sharing your experience with other schools in the network?')
    .setChoiceValues([
      'Yes — happy to mentor others',
      'Maybe — once I\'m more established',
      'I\'d prefer to learn from others first',
      'Not at this time'
    ])
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('Anything else you\'d like us to know?')
    .setRequired(false)
    .setHelpText('Questions, ideas, challenges — we\'re all ears!');

  form.addTextItem()
    .setTitle('How did you hear about the AI Tinkery / Satellite Network?')
    .setRequired(false);

  // Log the form URL
  Logger.log('✅ Form created successfully!');
  Logger.log('📝 Edit URL: ' + form.getEditUrl());
  Logger.log('📤 Share URL: ' + form.getPublishedUrl());
  Logger.log('🔗 Short URL: ' + form.shortenFormUrl(form.getPublishedUrl()));
}
