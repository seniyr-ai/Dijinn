# Setting Up Google Sheets Integration

To seamlessly push form submissions from our `CreateAvatar.tsx` form into a Google Sheet without setting up complex backend OAuth manually, follow these simple steps using **Google Apps Script**:

## 1. Create a Google Sheet
1. Go to your Google Drive and create a new **Google Sheet**.
2. Name it something like `PersonaAI Waitlist`.
3. Give your columns headers in row 1 exactly as your form properties:
   - A1: `date`
   - B1: `name`
   - C1: `phone`
   - D1: `genre`
   - E1: `instagramUsername`
   - F1: `followerCount`
   - G1: `topVideosViews`
   - H1: `topVideosEngagement`
   - I1: `ipAddress`
   - J1: `deviceId`

## 2. Add Google Apps Script
1. In your Google Sheet menu, click **Extensions > Apps Script**.
2. Delete any code in the editor and paste this exact script:

```javascript
const SHEET_NAME = 'Sheet1'; // Ensure this matches your tab name

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    const data = JSON.parse(e.postData.contents);
    
    // Add row logically appending what form sends
    sheet.appendRow([
      new Date(),
      data.name || '',
      data.phone || '',
      data.genre || '',
      data.instagramUsername || '',
      data.followerCount || '',
      data.topVideosViews || '',
      data.topVideosEngagement || '',
      data.ipAddress || '',
      data.deviceId || ''
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## 3. Deploy the Web App
1. Click the blue **Deploy** button in the top right, and select **New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Under *Description*, type something like `v1`.
4. Under *Execute as*, select **Me** (your Google account).
5. **CRITICAL**: Under *Who has access*, switch it to **Anyone**. 
6. Click **Deploy**. (Google will prompt you to authorize permissions—accept and allow).
7. Copy the **Web app URL** it generates (it ends in `/exec`).

## 4. Connect It To Your App
1. Go back to `src/pages/CreateAvatar.tsx`.
2. Find line 22, inside the `handleSubmit` try block. 
3. Replace the `const scriptURL = (window as any).GOOGLE_SCRIPT_URL || '';` line to directly use your copied URL:
   
```javascript
const scriptURL = "https://script.google.com/macros/s/YOUR_ACTUAL_APP_SCRIPT_ID/exec";
```

Now, every time anyone on your network submits the form, it will instantly add a new row to your Google Sheet!
