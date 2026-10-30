# MAKE WPG

## Design and Development Specification

**Version 1.0 | October 2026**

**Project:** MAKE WPG Calendar
**Location:** Winnipeg, Manitoba, Canada
**Platform:** Responsive web application
**Status:** Initial design approved; development pending

---

# 1. PROJECT OVERVIEW

### 1.1 Project Description

MAKE WPG is a community contributed calendar of design, culture, and arts in Winnipeg.

The website provides a shared platform through which cultural organizations, institutions, independent practitioners, and individuals can discover and contribute information about exhibitions, talks, and cultural activities taking place throughout the city.

The calendar is designed to grow organically through community contributions, supplemented by administrator curated listings and discoveries from publicly available sources.

All contributed events are subject to editorial review before publication.

### 1.2 Project Objectives

1. Establish a centralized and accessible calendar of Winnipeg's design, cultural, and artistic activities.
2. Encourage community participation through a simple event submission process.
3. Provide an intuitive, visually distinctive calendar interface.
4. Facilitate event discovery through categories, keywords, organizers, and locations.
5. Communicate upcoming activities through automated email newsletters.
6. Develop a cumulative digital archive of Winnipeg's cultural activities.
7. Generate periodic PDF publications documenting the city's cultural programming.
8. Enable future analysis of the geographic, temporal, and organizational patterns of cultural production.

### 1.3 Conceptual Framework

MAKE WPG is conceived as both an event calendar and a cultural instrument.

Beyond communicating upcoming activities, the platform will gradually document where, when, and how cultural activities take place across Winnipeg.

The accumulated information may reveal patterns of cultural production, geographic concentrations, seasonal activities, and relationships among cultural organizations, venues, and communities.

**Guiding statement:**

*A calendar of what is happening. An archive of what has happened.*

---

# 2. PUBLIC WEBSITE STRUCTURE

The website will initially consist of the following principal components.

| Component     | Function                                                               |
| ------------- | ---------------------------------------------------------------------- |
| CALENDAR      | Monthly event calendar and primary landing page                        |
| DAILY EVENTS  | Chronological listings for a selected date                             |
| EVENT DETAILS | Individual event information                                           |
| ABOUT         | Project description and objectives                                     |
| SUBMIT        | Public event contribution form                                         |
| SUBSCRIBE     | Email newsletter registration                                          |
| SEARCH        | Event search across multiple information fields                        |
| ARCHIVE       | Historical event records and publications, introduced in a later phase |

The calendar will remain the primary visual and navigational element.

Navigation should be minimal, with contextual panels and views rather than unnecessary separate pages.

---

# 3. VISUAL IDENTITY AND GRAPHIC DESIGN

### 3.1 General Design Principles

The website will adopt a contemporary minimalist graphic language characterized by:

* Strong typographic hierarchy.
* Geometric sans serif typography.
* Generous negative space.
* Monochromatic colour palette.
* Disciplined alignment and spacing.
* Minimal graphic ornamentation.
* Subtle dotted grid elements.
* Intuitive navigation and interaction.

The calendar itself should function as the principal visual identity of MAKE WPG.

### 3.2 Colour Palette

**Primary background:** Cool, neutral grey, approximately #C3C3C3.

**Primary typography:** White, approximately #FFFFFF.

**Secondary elements:** White with reduced opacity.

**Grid lines:** Fine dotted white lines with reduced opacity.

Final colours and contrast levels will be refined during implementation to meet accessibility requirements.

### 3.3 Typography

**Primary display typeface:** Century Gothic Bold or a closely matching geometric sans serif.

Used for:

* Month and year heading.
* MAKE WPG identity.
* Major page headings.

**Secondary typeface:** Light or regular geometric sans serif.

Used for:

* Calendar date numbers.
* Weekday labels.
* Navigation.
* Event listings.
* Descriptions and metadata.

Calendar numbers should be relatively large, light in weight, and proportionally balanced.

Where possible, use tabular numerals for consistent spacing.

### 3.4 General Layout

The approved desktop composition includes:

**Upper left:** Large month and year heading.

Example:

**OCTOBER | 2026**

**Upper right:**

MAKE WPG CALENDAR

ABOUT   SUBMIT   SUBSCRIBE   Search icon

**Main body:** Seven column monthly calendar.

**Lower left:** Event category filters.

ALL   TALK   EXHIBITION   OTHER

**Lower right:** WINNIPEG followed by a short horizontal line.

Thin previous and next month arrows are positioned outside the calendar body at its vertical midpoint.

### 3.5 Alignment Principles

The layout should follow consistent typographic alignment axes.

* Month heading aligns with the first calendar column.
* Weekday labels align with the corresponding date numbers.
* Date numbers and event indicators share the same left alignment.
* Category filters align with the calendar's left edge.
* Header navigation and right footer align with the calendar's right edge.
* Vertical dotted lines define the left boundaries of calendar columns.

The approved desktop and smartphone mockups should be used as primary visual references.

---

# 4. MONTHLY CALENDAR

### 4.1 Calendar Structure

The landing page displays the current month by default.

The calendar uses seven columns, beginning with Sunday.

Weekdays are abbreviated:

**S M T W T F S**

Each date occupies a consistent position within the monthly grid.

The calendar must correctly accommodate months requiring four, five, or six calendar rows.

### 4.2 Event Indicators

Events are represented by small dots beneath each date.

**● Solid dot:** Single day event or special activity.

**○ Hollow dot:** Multiday event.

Each dot represents one event occurring on that date.

A maximum of six dots will be displayed in two rows of three.

When more than six events occur on a date, an additional numerical indicator will appear.

Example:

● ● ○
○ ● ● +3

The indicator represents three additional events.

### 4.3 Multiday Events

Multiday events appear as hollow dots on each applicable date.

Contributors can specify:

* Start date.
* End date.
* Recurring weekday closures.
* Specific closure dates.

Closed dates will not display the exhibition's hollow dot.

### 4.4 Special Events

A multiday event may contain associated special activities, including:

* Opening receptions.
* Artist talks.
* Workshops.
* Special performances.
* Closing events.

These activities will be stored as linked event records.

Each special activity generates an additional solid dot on its scheduled date.

### 4.5 Calendar Navigation

Desktop:

Thin previous and next month arrows positioned beyond the calendar's left and right edges.

Smartphone:

Horizontal swiping between months, with accessible navigation controls as an alternative.

Selecting a date opens its daily event list.

### 4.6 Category Filters

The calendar provides four filters:

**ALL | TALK | EXHIBITION | OTHER**

Selecting a category updates the visible event indicators and listings.

ALL is the default selection.

---

# 5. DAILY EVENTS

### 5.1 Desktop Behaviour

Selecting a date opens a daily event panel on the right side of the calendar.

The calendar remains visible in a reduced width configuration.

The selected date is visually highlighted.

### 5.2 Smartphone Behaviour

Selecting a date opens a dedicated daily events view.

The interface provides an intuitive return to the calendar.

### 5.3 Event Listing

Events appear chronologically and may include:

* Event thumbnail.
* Start and end time.
* Event title.
* Venue.
* Primary category.
* Selected subject keywords.
* Indicator for reposted content where applicable.

Selecting an event opens its detail view.

---

# 6. EVENT DETAILS

Each event detail page or panel will display:

1. Event image.
2. Event title.
3. Primary category.
4. Date and time.
5. Description.
6. Organizer.
7. Venue and address.
8. Event website or registration link.
9. Subject keywords.
10. Add to Calendar function.
11. Share function.
12. Original source link where applicable.

For discovered events, the following elements will appear:

**[REPOST]**

**[VIEW ORIGINAL POST ↗]**

The repost designation will be stored separately from the event title.

### 6.1 Images

The initial system will accept one primary image per event.

Uploaded images will be automatically optimized for web and smartphone viewing.

Additional image gallery functionality may be considered in a later phase.

---

# 7. PUBLIC EVENT SUBMISSION

### 7.1 General Principles

Anyone may submit an event without registering an account.

The submission process should be straightforward and accessible on smartphones.

### 7.2 Submission Fields

| Field                  | Requirement                       |
| ---------------------- | --------------------------------- |
| Event title            | Required, maximum 100 characters  |
| Primary category       | Required: Talk, Exhibition, Other |
| Subject keywords       | Up to five                        |
| Description            | Required, maximum 150 words       |
| Start date             | Required                          |
| End date               | Optional                          |
| Start time             | Required where applicable         |
| End time               | Optional                          |
| Recurring closures     | Optional                          |
| Specific closure dates | Optional                          |
| Special events         | Optional, multiple entries        |
| Event format           | Physical, Online, Hybrid          |
| Organizer              | Required                          |
| Venue                  | Required for physical events      |
| Street address         | Required for physical events      |
| Image                  | Optional, one image               |
| Event link             | Optional                          |
| Contact email          | Required                          |
| Contributor email      | Required                          |

### 7.3 Subject Keywords

Contributors may provide up to five descriptive keywords.

Examples:

Architecture, Industrial Design, Book Launch, Public Art, Meet & Greet.

The system should support autocomplete suggestions based on existing keywords.

### 7.4 Submission Terms

Contributors must acknowledge that:

* Submitted information is accurate.
* They have permission to share submitted images and content.
* MAKE WPG may publish and archive approved content.
* Submitted materials may be included in newsletters and annual publications.
* All submissions are subject to editorial review.
* Publication is not guaranteed.

A checkbox confirming agreement is required.

The final terms, privacy policy, and image permissions will be reviewed before public deployment.

---

# 8. ADMINISTRATION

### 8.1 Access

The administrative interface will require secure authentication.

Initially, there will be one administrator.

The system should accommodate additional administrators or editors in the future.

### 8.2 Administrative Dashboard

The dashboard will contain:

**PENDING | PUBLISHED | DISCOVER | SUBSCRIBERS | ARCHIVE**

### 8.3 Submission Review

New submissions enter a pending review queue.

The administrator can:

* Review submitted information.
* Edit content.
* Approve publication.
* Decline submissions.
* Provide an optional explanation for declining.
* Identify possible duplicates.

Approved events are automatically published.

Contributors receive email notifications when their submissions are approved or declined.

### 8.4 Recurring Contributors

The system will identify repeat contributor email addresses.

Administrative indicators:

***** Previously submitted.

**✓** Previously approved contributor.

Contributor history should be accessible during review.

All submissions remain subject to approval regardless of contributor history.

### 8.5 Published Event Management

Administrators can:

* Edit published events.
* Correct dates and information.
* Remove events.
* Change event categories.
* Manage images and links.
* Archive historical records.

---

# 9. DISCOVER: EVENT DISCOVERY FUNCTION

### 9.1 Purpose

DISCOVER is an administrator initiated tool for identifying potential Winnipeg cultural events from public online sources.

Its primary purpose is to reduce the work required to populate the calendar.

### 9.2 Discovery Methods

The system should support three methods.

**A. Source Monitoring**

Search selected cultural organizations' websites and publicly accessible event pages.

**B. Social Link Import**

The administrator pastes a link to a public Instagram, Facebook, or other social media post.

The system attempts to extract event information from accessible content.

**C. Social Media Discovery**

Search permitted publicly accessible social media sources for potential cultural events.

This functionality depends on platform access and applicable restrictions.

### 9.3 Source Directory

Maintain an administrative directory containing:

* Organization name.
* Website.
* Instagram link.
* Facebook link.
* Other relevant sources.
* Last scanned date.

### 9.4 Discovery Workflow

**SCAN → IDENTIFY → EXTRACT → REVIEW → PUBLISH**

Discovered events enter a review queue.

Extracted information is organized into the standard event fields.

Missing or uncertain information is flagged for administrator verification.

Potential duplicates are identified.

Nothing is published automatically.

### 9.5 Reposted Events

Discovered events may be published with a visible:

**[REPOST]**

label.

Event details include:

**[VIEW ORIGINAL POST ↗]**

The original source URL is retained in the database.

Reposted listings should prioritize factual event information and link to original announcements rather than reproducing copyrighted images or substantial descriptions without permission.

---

# 10. SEARCH

The public search function will examine:

* Event titles.
* Descriptions.
* Subject keywords.
* Organizer names.
* Venue names.
* Street addresses.

Search results can be filtered by primary category.

The search interface should remain visually minimal and consistent with the calendar.

---

# 11. NEWSLETTER AND SUBSCRIPTIONS

### 11.1 Registration

Users can subscribe using their email address.

No account registration is required.

### 11.2 Frequency

Subscribers can select:

**WEEKLY | BIWEEKLY | MONTHLY**

Weekly is the default.

### 11.3 Automated Newsletter

The newsletter will automatically compile approved upcoming events from the database.

The design should reflect MAKE WPG's minimalist visual identity.

### 11.4 Special Announcements

Administrators may send occasional special announcements.

Subscriber preferences should accommodate these communications.

### 11.5 Subscriber Management

The system must support:

* Subscription confirmation.
* Newsletter frequency preferences.
* Unsubscribe links.
* Subscriber management.
* Compliance with applicable Canadian privacy and electronic communication requirements.

---

# 12. CULTURAL ARCHIVE

### 12.1 Digital Archive

Past events should remain accessible through a historical archive.

The archive will support searches by:

* Date.
* Category.
* Keywords.
* Organizer.
* Venue.
* Location.

### 12.2 PDF Publications

Administrators can generate annual or quarterly PDF publications.

The system will automatically organize event records according to a predetermined publication template.

The final graphic design of the publication will be developed separately.

### 12.3 Data Retention

Historical records should not be deleted automatically.

The administrator may archive or delete records according to an established retention policy.

Publication of a PDF archive does not automatically trigger deletion of source data.

### 12.4 Cultural Data

The database should preserve structured information suitable for future analysis of:

* Cultural activity by neighbourhood.
* Seasonal event patterns.
* Event categories.
* Organizer participation.
* Venue distribution.
* Changes in cultural programming over time.

---

# 13. RESPONSIVE DESIGN

The website must automatically adapt to different screen sizes.

### Desktop

* Full monthly calendar.
* Daily events displayed in a right side panel.
* Event details displayed within an expanded contextual view.
* Full navigation visible.

### Tablet

* Responsive calendar proportions.
* Adapted navigation.
* Event panels adjusted to available screen width.

### Smartphone

* Seven column monthly calendar.
* Touch friendly date selection.
* Horizontal month navigation.
* Full screen daily event listings.
* Full screen event details.
* Simplified navigation menu.
* Optimized image display.

The visual identity should remain consistent across devices.

---

# 14. TECHNICAL FRAMEWORK

The preliminary recommended technology stack is:

| Component                    | Technology                |
| ---------------------------- | ------------------------- |
| Website framework            | Next.js / React           |
| Styling                      | Tailwind CSS              |
| Database                     | Supabase                  |
| Image storage                | Supabase Storage          |
| Administrator authentication | Supabase Auth             |
| Transactional email          | Resend                    |
| Newsletter delivery          | Email service integration |
| PDF generation               | Server based PDF library  |
| Hosting                      | Vercel                    |

The architecture should prioritize maintainability, security, reasonable operating costs, and future expansion.

The final technology choices will be confirmed during development.

---

# 15. DEVELOPMENT PHASES

### PHASE 01: INTERACTIVE WEBSITE PROTOTYPE

Develop:

* Responsive monthly calendar.
* Month navigation.
* Event indicators.
* Category filters.
* Daily event listings.
* Event detail views.
* Search interface.
* Sample event data.

**Outcome:** Functional front end prototype.

### PHASE 02: COMMUNITY PARTICIPATION

Develop:

* Event database.
* Public submission form.
* Image uploads.
* Administrator authentication.
* Submission approval workflow.
* Contributor email notifications.

**Outcome:** Operational community contributed calendar.

### PHASE 03: EVENT DISCOVERY

Develop:

* Source directory.
* Social media link import.
* Event information extraction.
* Discovery review queue.
* Duplicate detection.
* Repost functionality.

**Outcome:** Administrator supported event discovery system.

### PHASE 04: NEWSLETTER

Develop:

* Subscription form.
* Subscriber database.
* Frequency preferences.
* Automated event newsletters.
* Special announcements.
* Unsubscribe management.

**Outcome:** Automated cultural event communication system.

### PHASE 05: ARCHIVE AND PUBLICATION

Develop:

* Historical event archive.
* Advanced archive search.
* PDF publication templates.
* Automated publication generation.
* Data retention management.

**Outcome:** Long term cultural documentation platform.

### PHASE 06: TESTING AND PUBLIC DEPLOYMENT

Complete:

* Responsive interface testing.
* Accessibility review.
* Security testing.
* Database and workflow testing.
* Email delivery testing.
* Domain configuration.
* Hosting and deployment.
* Administrator documentation.

**Outcome:** Public launch of MAKE WPG.

---

# 16. CURRENT DESIGN STATUS

The following visual mockups have been developed and provisionally approved:

**01. Desktop Monthly Calendar**

Large OCTOBER | 2026 heading, MAKE WPG CALENDAR identity, seven column calendar, dotted vertical grid, event indicators, navigation, and category filters.

**02. Smartphone Monthly Calendar**

Responsive seven column calendar with simplified navigation.

**03. Daily Event Listings**

Desktop calendar with right side event panel and dedicated smartphone event list.

**04. Event Details**

Desktop and smartphone event information layouts, including images, descriptions, venue information, links, and sharing functions.

These mockups establish the visual direction for implementation.

Minor adjustments to typography, alignment, spacing, contrast, and interaction may be made during development.

---

# 17. NEXT DEVELOPMENT TASK

**Begin Phase 01: Interactive Website Prototype.**

Use the approved visual mockups as the primary graphic references.

Develop a working responsive website using representative event data.

The initial prototype should demonstrate the complete user journey:

**MONTHLY CALENDAR → SELECT DATE → DAILY EVENTS → EVENT DETAILS → RETURN TO CALENDAR**

The implementation should prioritize accurate calendar functionality, visual consistency, responsive behaviour, and simple navigation.

The prototype should be reviewed and refined before connecting the production database and administrative functions.

---

**MAKE WPG | Calendar**

*A calendar of what is happening. An archive of what has happened.*

---

# 18. DEVELOPMENT LOG — VERSION 1.1 (29 OCTOBER 2026)

**Stage 1 implementation initiated.** A Next.js, React, TypeScript, and Tailwind CSS front end has been created with representative sample event records.

**Implemented in initial source package:** responsive seven column monthly grid, Sunday first weekday ordering, month navigation, mobile swipe navigation, selected date, desktop daily event panel, mobile daily event view, event details, category filters, simple keyword search, share and calendar file actions, responsive header and navigation.

**Visual direction:** approved October 2026 desktop and smartphone calendar, daily events, and event details mockups are the primary references. Grey and white palette, geometric typography, subtle dotted column boundaries, event dots, and minimalist navigation are retained.

**Implementation decisions:** initial sample event records are fictional and must not be treated as verified cultural listings. Image regions are placeholders pending licensed content. The initial date shown is October 2026 to enable direct comparison against approved mockups; switch to the actual current month before public launch. About is a basic introduction; Submit and Subscribe are placeholders pending subsequent phases.

**Items to validate in browser:** alignment and spacing against mockups, mobile touch targets, contrast/accessibility, overflow at all widths, font matching, real imagery, date and time formatting, calendar exports, and category/search interaction. Formal test and production build have not yet been completed in this package.

**Deferred to later phases:** Supabase persistence and storage, editorial review, authentication, public submissions, source discovery, email services, archives, and public launch.


## Development log | 29 October 2026 | Stage 1.1

Initial deployment confirmed by user: calendar visible, previous month navigation works, daily event list and event details work, mobile view works. Next month arrow fails on desktop when the event panel is closed, but works with the panel open. A CSS adjustment relocates the interactive hit area inward while keeping the arrow visually near the right edge. This is a proposed fix and requires verification on the deployed website.


## Development log | 29 October 2026 | Stage 1 Revision 1.2

**Approved master reference:** The supplied desktop mockup with large OCTOBER | 2026 at upper left and MAKE WPG CALENDAR at upper right is authoritative. Earlier suggestions to move the identity to the upper left and place a small year/month beneath it are superseded. The ABOUT / SUBMIT / SUBSCRIBE / search navigation remains immediately below the upper right identity.

**Visual implementation prepared:** Desktop header rearranged to match the approved hierarchy; weekday and date typographic scale increased; weekday labels, date numbers and event dots share column alignment; vertical boundaries use a fine white dotted rule; event dots enlarged; background adjusted to provisional neutral grey #A8A8A8. Desktop calendar proportions and functional controls retained.

**Functional correction:** Out of month cells are now noninteractive blank div elements, rather than disabled buttons, to prevent unwanted native outlined button circles. Previously verified next month arrow clickable area retained.

**Testing still required:** Deploy and visually compare against approved desktop reference at 100% zoom; check calendar and panel states, 4/5/6 week months, smartphone layout, arrow navigation and category filters. Grey/white contrast, particularly for small text, requires accessibility review; #A8A8A8 is provisional. No production build was run in this environment.


## Development log | 29 October 2026 | Stage 1 Revision 1.3

**Approved changes:** Retain desktop's large upper left OCTOBER | 2026 and upper right header group. Replace MAKE WPG | Calendar with MAKE WPG CALENDAR, using bold MAKE WPG and lighter CALENDAR. Align the left edges of MAKE and ABOUT within the existing upper right header position. Refine navigation spacing and align weekday labels, date numbers and dots. Slightly enlarge event indicators.

**Smartphone:** Preserve existing calendar height and week row proportions. Apply mobile only grey background #929292, improve dotted grid visibility, slightly strengthen date numerals and enlarge dots to 6px. Desktop background remains #A8A8A8.

**Verification required:** Confirm desktop header alignment at typical browser widths, mobile readability and contrast, arrow hit areas, and daily event panel. Mobile white text on #929292 still needs WCAG contrast evaluation, particularly for small labels. This revision has not yet been production built or browser tested.


## Revision 1.4 | 29 October 2026 | Daily Event Listings

Implementation scope: desktop panel heading aligned to the top of the weekday labels; subtle solid panel divider distinct from the dotted calendar grid; modestly larger desktop event time, title, venue and category text; full row click targets and desktop hover feedback. Smartphone close (×) and CALENDAR back controls, event category size, row height, and overall layout retained. Added original abstract SVG sample artwork and sample morning, afternoon, all day, long title, no image and multiday events. All sample events are fictional and not public listings. Chronological sorting now handles AM/PM and ALL DAY. Review pending deployment and browser testing.


## Revision 1.5 | 29 October 2026 | Event Details

Approved: desktop DAILY EVENTS navigation aligns with weekday labels; desktop image approximately 16:9; slightly enlarged supporting text; single independent desktop panel scroll with fixed calendar; mobile image, title, date/time, navigation, and full page scrolling retained; mobile description line spacing increased. Venue address is a clickable Google Maps search link, using full address when supplied and venue name plus Winnipeg as fallback for vague sample addresses. Optional LINK field displays Visit Event Page and opens in a new tab; absent links are hidden. Add to Calendar and Share retained. The NEWHAWK fictional sample record includes an example.org test link only, not a real event page. Sample event timing is illustrative; Stage 2 will separate duration, daily hours, and individual sessions. Production build and real device tests required before approval.
