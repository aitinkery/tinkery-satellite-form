// ==============================================
// Tinkery Satellite Network - Form Backend
// ==============================================
// SETUP:
// 1. Go to https://script.google.com → New project
// 2. Paste this code (replace default code)
// 3. Click Deploy → New deployment
// 4. Type: Web app
// 5. Execute as: Me
// 6. Who has access: Anyone
// 7. Click Deploy → Copy the URL
// 8. Paste that URL into the HTML form's action attribute
// ==============================================

var SHEET_ID = '1qJSQhU2-WWzrjBnO5JbBh12RhgjKC7VOcFQwsvutbcM';

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName('Sheet1');
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      new Date().toISOString(),
      data.fullName || '',
      data.email || '',
      data.jobTitle || '',
      data.schoolName || '',
      data.district || '',
      data.cityState || '',
      data.schoolType || '',
      data.gradeLevels || '',
      data.enrollment || '',
      data.numStaff || '',
      data.tinkeryStatus || '',
      data.motivation || '',
      data.currentSetup || '',
      (data.aiTools || []).join(', '),
      (data.supportInterests || []).join(', '),
      (data.participation || []).join(', '),
      data.willingToMentor || '',
      data.howHeard || '',
      data.additionalNotes || ''
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: err.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({status: 'ok', message: 'Tinkery Satellite Network Form Backend'}))
    .setMimeType(ContentService.MimeType.JSON);
}
