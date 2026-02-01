# How to Set Up Google Analytics 4 (GA4)

## Step 1: Create a Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click **"Start measuring"** or **"Admin"** (bottom left)
3. Click **"+ Create Account"**
4. Enter account name: **"EZ Cut Media"**

## Step 2: Set Up a Property

1. Property name: **"EZ Cut Media Website"**
2. Time zone: **India (GMT+5:30)**
3. Currency: **Indian Rupee (₹)**
4. Click **"Next"**

## Step 3: Configure Business Information

1. Industry: **"Media & Entertainment"** or **"Business Services"**
2. Business size: **Small (1-10 employees)**
3. How you plan to use Google Analytics:
   - ✅ Measure customer engagement
   - ✅ Measure advertising ROI
   - ✅ Examine user behavior

## Step 4: Accept Terms of Service

1. Select **"India"** as your country
2. Accept the terms
3. Accept data processing terms

## Step 5: Set Up Data Stream

1. Choose platform: **"Web"**
2. Website URL: **`https://ezcutmedia.com`**
3. Stream name: **"EZ Cut Media Website"**
4. ✅ Enable **Enhanced measurement** (recommended)
   - This automatically tracks:
     - Page views
     - Scrolls
     - Outbound clicks
     - Site search
     - Video engagement
     - File downloads

## Step 6: Get Your Measurement ID

After creating the data stream, you'll see:

```
Measurement ID: G-XXXXXXXXXX
```

**Copy this ID!**

## Step 7: Add Measurement ID to Your Website

1. Create a file named `.env.local` in your project root:

```bash
# In: c:\Users\krish\.gemini\antigravity\ezcutmedia\.env.local

NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

2. Replace `G-XXXXXXXXXX` with your actual Measurement ID

3. **IMPORTANT**: Make sure `.env.local` is in your `.gitignore` file

## Step 8: Verify Installation

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Open your site: `http://localhost:3000`

3. In Google Analytics:
   - Go to **Reports** → **Realtime**
   - You should see yourself as an active user

4. Alternatively, use **Google Tag Assistant**:
   - Install the Chrome extension
   - Visit your site
   - Check if GA4 tag is firing

## Step 9: Set Up Important Events (Optional)

In Google Analytics, go to **Events** and mark these as conversions:

1. **Contact Button Clicks**
   - WhatsApp link clicks
   - Phone call clicks
   - Instagram link clicks

2. **Package Interactions**
   - Scroll depth on packages section
   - Time on packages page

3. **Form Submissions** (if you add a booking form later)

## Step 10: Create Custom Reports

Recommended reports to create:

1. **Traffic Sources**
   - Where visitors come from
   - Instagram vs. organic search

2. **Popular Pages**
   - Most visited sections
   - Time spent on each page

3. **Conversions**
   - WhatsApp clicks
   - Phone calls
   - Instagram follows

## Testing Checklist

- [ ] Measurement ID added to `.env.local`
- [ ] Server restarted
- [ ] Real-time data showing in GA4
- [ ] Page views being tracked
- [ ] No console errors
- [ ] Enhanced measurement enabled
- [ ] Events firing correctly

## Privacy Compliance

Make sure to add a **Privacy Policy** page mentioning:
- You use Google Analytics
- What data is collected
- How it's used
- User rights (opt-out options)

## Useful GA4 Features

1. **Realtime Reports** - See who's on your site right now
2. **Acquisition Reports** - Where traffic comes from
3. **Engagement Reports** - What people do on your site
4. **Demographics** - Age, gender, interests of visitors
5. **Events** - Track specific actions (clicks, scrolls, etc.)

## Additional Tracking (Advanced)

Consider adding custom events for:
- Package card clicks
- Video plays (Instagram reel previews)
- Contact button clicks
- Social media link clicks
- Scroll depth on pricing section

These can be added later as needed!

---

## Quick Setup Commands

```bash
# 1. Create .env.local file
echo "NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX" > .env.local

# 2. Restart dev server
npm run dev
```

## Verification URL

After setup, verify here:
https://analytics.google.com/analytics/web/#/report-home/YOUR_PROPERTY_ID

---

**Need Help?**
Google Analytics Help: https://support.google.com/analytics
