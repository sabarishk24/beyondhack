/* Care Verified – English <-> Tamil switcher (dictionary based).
   To translate more text: add  "English text": "தமிழ்"  to EXACT,
   or for long paragraphs add [start of English text, full Tamil] to PREFIX. */
(function () {
  var KEY = "cv-lang";
  var EXACT = {
    /* header */
    "My profile":"என் சுயவிவரம்","Sign out":"வெளியேறு",
    "Signed in successfully. Taking you to the home page…":"வெற்றிகரமாக உள்நுழைந்தீர்கள். முகப்புப் பக்கத்திற்குச் செல்கிறது…",
    "Enter a valid 10-digit mobile number.":"சரியான 10 இலக்கக் கைப்பேசி எண்ணை உள்ளிடவும்.",
    "Enter the OTP sent to your phone.":"உங்கள் தொலைபேசிக்கு அனுப்பிய OTP-ஐ உள்ளிடவும்.",
    "Enter your password.":"உங்கள் கடவுச்சொல்லை உள்ளிடவும்.",
    "6-digit security code dispatched via WhatsApp & SMS.":"6 இலக்கப் பாதுகாப்புக் குறியீடு வாட்ஸ்அப் & SMS மூலம் அனுப்பப்பட்டது.",
    "Password recovery link sent to your registered mobile.":"கடவுச்சொல் மீட்பு இணைப்பு உங்கள் பதிவு செய்த கைப்பேசிக்கு அனுப்பப்பட்டது.",
    "Find care":"சிகிச்சை தேடு","Community desk":"சமூக உதவி மையம்","Saved care":"சேமித்த சேவைகள்",
    "Sign in":"உள்நுழை","Emergency 108":"அவசர உதவி 108","Care Verified":"கேர் வெரிஃபைட்",
    /* home */
    "Weekly District Audit Active":"வாராந்திர மாவட்ட தணிக்கை செயலில் உள்ளது",
    "1,482 verified centers today":"இன்று 1,482 சரிபார்க்கப்பட்ட மையங்கள்",
    "Find care nearby that offers what you need.":"உங்களுக்குத் தேவையான சிகிச்சையை அருகிலேயே கண்டறியுங்கள்.",
    "Directly check operational equipment, specialized doctors on duty, and multilingual staff before you travel.":"பயணிக்கும் முன் இயங்கும் உபகரணங்கள், பணியிலுள்ள சிறப்பு மருத்துவர்கள், பன்மொழிப் பணியாளர்களை நேரடியாகச் சரிபாருங்கள்.",
    "PH:What service do you need? (e.g. Dialysis, Maternity, X-ray)":"உங்களுக்கு என்ன சேவை தேவை? (எ.கா. டயாலிசிஸ், மகப்பேறு, எக்ஸ்-ரே)",
    "Speak":"பேசுங்கள்","Search Verified":"சரிபார்க்கப்பட்டவற்றைத் தேடு","Cancel":"ரத்து செய்",
    "Common Emergency & Essential Services":"பொதுவான அவசர மற்றும் அத்தியாவசிய சேவைகள்",
    "Machine Availability Checked":"இயந்திர இருப்பு சரிபார்க்கப்பட்டது",
    "Dialysis":"டயாலிசிஸ்","X-ray":"எக்ஸ்-ரே","Delivery & Maternity":"பிரசவம் & மகப்பேறு","Eye care":"கண் சிகிச்சை",
    "Pharmacy (24x7)":"மருந்தகம் (24x7)","Blood Bank":"இரத்த வங்கி","Emergency Trauma":"அவசர அதிர்ச்சி சிகிச்சை",
    "Use my location":"என் இருப்பிடத்தைப் பயன்படுத்து",
    "Or choose your taluk / town manually":"அல்லது உங்கள் வட்டம் / ஊரை கைமுறையாகத் தேர்ந்தெடுக்கவும்",
    "Your location stays safely on this device. We do not track or save your address.":"உங்கள் இருப்பிடம் இந்தச் சாதனத்திலேயே பாதுகாப்பாக இருக்கும். உங்கள் முகவரியை நாங்கள் கண்காணிப்பதோ சேமிப்பதோ இல்லை.",
    "Zero-Wait Night Triage":"காத்திருப்பு இல்லாத இரவு அவசர சிகிச்சை",
    "Dialysis tonight? Maternity urgent?":"இன்றிரவு டயாலிசிஸ் வேண்டுமா? அவசர மகப்பேறா?",
    "Browse 24x7 open verified facilities in one click with confirmed live power generator and on-call specialist.":"மின்னாக்கி மற்றும் அழைப்பில் உள்ள சிறப்பு மருத்துவர் உறுதி செய்யப்பட்ட, 24x7 திறந்திருக்கும் சரிபார்க்கப்பட்ட மையங்களை ஒரே கிளிக்கில் காணுங்கள்.",
    "View 24x7 Open Now (23 nearby)":"24x7 திறந்துள்ளவை (அருகில் 23)","Ambulance 108":"ஆம்புலன்ஸ் 108",
    "3 Verified Centers Ready in Your Taluk":"உங்கள் வட்டத்தில் 3 சரிபார்க்கப்பட்ட மையங்கள் தயார்",
    "Sorted by:":"வரிசை:","Shortest Travel Distance":"குறைந்த பயண தூரம்",
    "Taluk Govt Headquarters Hospital":"வட்ட அரசு தலைமை மருத்துவமனை",
    "4/4 Dialysis Beds Open":"4/4 டயாலிசிஸ் படுக்கைகள் காலி",
    "Tirukoilur Government Hospital":"திருக்கோவிலூர் அரசு மருத்துவமனை",
    "Kallakurichi Main Rd, Near Bus Stand, Tirukoilur — 4.2 km away":"கள்ளக்குறிச்சி மெயின் ரோடு, பேருந்து நிலையம் அருகில், திருக்கோவிலூர் — 4.2 கி.மீ தொலைவில்",
    "Tamil & English Staff":"தமிழ் & ஆங்கிலப் பணியாளர்கள்","Free Under CMCHIS":"CMCHIS திட்டத்தில் இலவசம்",
    "Wheelchair Ramp Ready":"சக்கர நாற்காலி சாய்தளம் உள்ளது",
    "Duty Nephrologist:":"பணியிலுள்ள சிறுநீரக மருத்துவர்:","Dr. S. Sundaram, MD":"டாக்டர் எஸ். சுந்தரம், MD",
    "On Shift until 10:00 PM":"இரவு 10:00 மணி வரை பணியில்","Confirmed Consumables:":"உறுதி செய்யப்பட்ட நுகர்பொருட்கள்:",
    "Dialyzer lines in-stock":"டயலைசர் குழாய்கள் கையிருப்பில்",
    "Audited by: Health Inspector Selvi K.":"தணிக்கை: சுகாதார ஆய்வாளர் செல்வி கே.",
    "Call Reception":"வரவேற்பை அழைக்கவும்","Get Route (4.2 km)":"வழி காட்டு (4.2 கி.மீ)","Get Route (6.8 km)":"வழி காட்டு (6.8 கி.மீ)",
    "Trust Community Care Center":"டிரஸ்ட் சமூக சிகிச்சை மையம்","2 of 3 Machines Active":"3-ல் 2 இயந்திரங்கள் இயங்குகின்றன",
    "Annai Karunya Dialysis & Life Care":"அன்னை கருணை டயாலிசிஸ் & உயிர் காப்பு மையம்",
    "Railway Feeder Road, Arakandanallur — 6.8 km away":"ரயில்வே ஃபீடர் ரோடு, அரகண்டநல்லூர் — 6.8 கி.மீ தொலைவில்",
    "Bilingual Receptionist":"இருமொழி வரவேற்பாளர்","24x7 Generator Backup":"24x7 மின்னாக்கி வசதி","RO Water Tested":"RO நீர் பரிசோதிக்கப்பட்டது",
    "Clinical Lead:":"மருத்துவப் பொறுப்பாளர்:","Sister Mary Anita, RN":"செவிலியர் மேரி அனிதா, RN",
    "Night Technician present":"இரவு தொழில்நுட்பர் உள்ளார்","Emergency Protocol:":"அவசர நெறிமுறை:","Tied to District ICU":"மாவட்ட ICU உடன் இணைப்பு",
    "Audited by: Village Health Nurse Anbarasi":"தணிக்கை: கிராம சுகாதார செவிலியர் அன்பரசி",
    "Explore 18 additional facilities across Kallakurichi & Villupuram districts":"கள்ளக்குறிச்சி & விழுப்புரம் மாவட்டங்களில் மேலும் 18 மையங்களைக் காண்க",
    "Predictable Care Protocol":"நம்பகமான சிகிச்சை நெறிமுறை","How Care Verified Works for Your Family":"கேர் வெரிஃபைட் உங்கள் குடும்பத்திற்கு எவ்வாறு உதவுகிறது",
    "STEP 01":"படி 01","STEP 02":"படி 02","STEP 03":"படி 03",
    "1. Search by exact need":"1. தேவையைப் பொறுத்துத் தேடுங்கள்","Avoid empty trips & wasted bus fare":"வீண் பயணமும் பேருந்துக் கட்டணமும் தவிர்க்கவும்",
    "2. Check the verified date":"2. சரிபார்த்த தேதியைப் பாருங்கள்","Updated weekly with phone audits":"தொலைபேசி தணிக்கையுடன் வாரந்தோறும் புதுப்பிக்கப்படும்",
    "3. Call directly or get directions":"3. நேரடியாக அழைக்கவும் அல்லது வழி பெறவும்","Dedicated staff triage desk lines":"பிரத்யேகப் பணியாளர் உதவி எண்கள்",
    "Low Connectivity & 2G Compatible":"குறைந்த இணைப்பு & 2G ஆதரவு","Heading to an area with weak network coverage?":"நெட்வொர்க் பலவீனமான பகுதிக்குச் செல்கிறீர்களா?",
    "Save Offline Taluk List":"வட்டப் பட்டியலை ஆஃப்லைனில் சேமி","Directory Saved Offline!":"பட்டியல் ஆஃப்லைனில் சேமிக்கப்பட்டது!",
    "Immediate Medical Emergency?":"உடனடி மருத்துவ அவசரமா?",
    "In a life-threatening medical emergency, call 108 immediately for government ambulance triage.":"உயிருக்கு ஆபத்தான அவசரநிலையில், அரசு ஆம்புலன்ஸுக்கு உடனடியாக 108-ஐ அழைக்கவும்.",
    "Dial 108 Ambulance":"108 ஆம்புலன்ஸை அழைக்கவும்",
    "Information is for finding services, not medical advice. Sample data for demonstration.":"இந்தத் தகவல் சேவைகளைக் கண்டறிய மட்டுமே, மருத்துவ ஆலோசனை அல்ல. மாதிரித் தரவு (செயல்விளக்கத்திற்கு).",
    "Health Navigation":"சுகாதார வழிகாட்டி","Primary Health Centres":"ஆரம்ப சுகாதார நிலையங்கள்","Community Health Desks":"சமூக சுகாதார மையங்கள்",
    "Maternity & Infant Care":"மகப்பேறு & சிசு பராமரிப்பு","Verification Protocol":"சரிபார்ப்பு நெறிமுறை","Facility Operations":"மையச் செயல்பாடுகள்",
    "Update Clinic Hours":"மருத்துவமனை நேரத்தைப் புதுப்பி","Staff Verification Login":"பணியாளர் சரிபார்ப்பு உள்நுழைவு",
    "Report Out-of-Stock Supplies":"கையிருப்பு இல்லாத பொருட்களைத் தெரிவி","Accessibility Standards":"அணுகல் தரநிலைகள்",
    "Privacy & Consent":"தனியுரிமை & ஒப்புதல்","Terms of Use":"பயன்பாட்டு விதிமுறைகள்","Accessibility (WCAG AAA)":"அணுகல்தன்மை (WCAG AAA)",
    "© 2025 Care Verified. Modern Civic Tactility for Rural Health Access.":"© 2025 கேர் வெரிஃபைட். கிராமப்புற சுகாதார அணுகலுக்கான நவீன குடிமை வடிவமைப்பு.",
    /* community */
    "14 Panchayat Desks Active · Kallakurichi & Villupuram Districts":"14 ஊராட்சி உதவி மையங்கள் செயலில் · கள்ளக்குறிச்சி & விழுப்புரம் மாவட்டங்கள்",
    "Community Health Desk":"சமூக சுகாதார உதவி மையம்","Updated directly by field staff":"களப் பணியாளர்களால் நேரடியாகப் புதுப்பிக்கப்படுகிறது",
    "Toll-Free 1800-425-CARE":"கட்டணமில்லா 1800-425-CARE","Weekly Health Audit":"வாராந்திர சுகாதாரத் தணிக்கை","Cycle 42":"சுழற்சி 42",
    "Sub-centres audited":"தணிக்கை செய்யப்பட்ட துணை நிலையங்கள்","Medicine uptime":"மருந்து இருப்பு விகிதம்",
    "Next joint taluk review: Friday, 10:30 AM":"அடுத்த கூட்டு வட்ட ஆய்வு: வெள்ளி, காலை 10:30",
    "Report a Facility Change":"மையத்தில் மாற்றத்தைத் தெரிவி","Request Verification Visit":"சரிபார்ப்பு வருகை கோரு",
    "Volunteer as a Verifier":"சரிபார்ப்பாளராகத் தன்னார்வம்","Live Community Audit & Status Feed":"நேரடி சமூகத் தணிக்கை & நிலை அறிவிப்புகள்",
    "All Updates (4)":"அனைத்து புதுப்பிப்புகள் (4)","Important Notices (1)":"முக்கிய அறிவிப்புகள் (1)",
    "Tirukoilur Govt Hospital":"திருக்கோவிலூர் அரசு மருத்துவமனை","Verified today 08:30 AM":"இன்று காலை 08:30 மணிக்குச் சரிபார்க்கப்பட்டது",
    "Desk Call":"மையத்தை அழை","Sankarapuram Primary Health Centre":"சங்கராபுரம் ஆரம்ப சுகாதார நிலையம்","Notice Active":"அறிவிப்பு நடைமுறையில்",
    "Help Desk":"உதவி மையம்","Ulundurpet Trust Clinic":"உளுந்தூர்பேட்டை டிரஸ்ட் கிளினிக்","Schedule Call":"அழைப்பைத் திட்டமிடு",
    "Rishivandiyam Sub-Centre":"ரிஷிவந்தியம் துணை நிலையம்","Contact Post":"பதிவைத் தொடர்பு கொள்",
    "Kallakurichi Taluk Liaison":"கள்ளக்குறிச்சி வட்டத் தொடர்பு அலுவலர்","Active hours: 8:00 AM – 4:30 PM":"செயல்படும் நேரம்: காலை 8:00 – மாலை 4:30",
    "Office: Kallakurichi Taluk GH Campus":"அலுவலகம்: கள்ளக்குறிச்சி வட்ட அரசு மருத்துவமனை வளாகம்","Call Desk":"அழைப்பு மையம்","WhatsApp":"வாட்ஸ்அப்",
    "Inspector Selvi K.":"ஆய்வாளர் செல்வி கே.","District Verification Lead":"மாவட்டச் சரிபார்ப்புத் தலைவர்",
    "Villupuram & Ulundurpet Division":"விழுப்புரம் & உளுந்தூர்பேட்டை பிரிவு","Active hours: 9:00 AM – 6:00 PM":"செயல்படும் நேரம்: காலை 9:00 – மாலை 6:00",
    "District Collectorate Health Cell":"மாவட்ட ஆட்சியரகச் சுகாதாரப் பிரிவு","Direct Call":"நேரடி அழைப்பு","Community Helplines":"சமூக உதவி எண்கள்",
    "Toll-Free Rural Health Line":"கட்டணமில்லா கிராமப்புறச் சுகாதார உதவி எண்","Mon – Sat, 8:00 AM – 8:00 PM":"திங்கள் – சனி, காலை 8:00 – இரவு 8:00",
    "Direct language triage in Tamil & English":"தமிழ் & ஆங்கிலத்தில் நேரடி உதவி","Dial 1800-425-CARE Now":"இப்போதே 1800-425-CARE அழைக்கவும்",
    "Have an update about a clinic nearby?":"அருகிலுள்ள மருத்துவமனை பற்றிய புதிய தகவல் உள்ளதா?",
    "Choose clinic or health post...":"மருத்துவமனை அல்லது சுகாதார நிலையத்தைத் தேர்ந்தெடுக்கவும்...",
    "Other unlisted rural dispensary...":"பட்டியலில் இல்லாத பிற கிராம மருந்தகம்...",
    "PH:e.g. Selvam, Ward 4 or 944xxxxxxx":"எ.கா. செல்வம், வார்டு 4 அல்லது 944xxxxxxx",
    "Leave blank if you prefer complete anonymity.":"முழுமையாக அடையாளம் வெளிப்படுத்த விரும்பவில்லை என்றால் காலியாக விடவும்.",
    "Doctor timing changed":"மருத்துவர் நேரம் மாறியது","Machine / Lab issue":"இயந்திரம் / ஆய்வகச் சிக்கல்",
    "Staff helpful & open":"பணியாளர்கள் உதவியாகவும் திறந்தும் உள்ளனர்","Other information":"பிற தகவல்",
    "Request a Verification Visit":"சரிபார்ப்பு வருகையைக் கோருங்கள்","Village & Panchayat Name":"கிராமம் & ஊராட்சி பெயர்",
    "PH:e.g. Melur Panchayat Sub-Centre":"எ.கா. மேலூர் ஊராட்சி துணை நிலையம்","Reason for check":"சரிபார்ப்புக்கான காரணம்",
    "Dispatch Check Request":"கோரிக்கையை அனுப்பு","Full Name":"முழுப் பெயர்","PH:Your name":"உங்கள் பெயர்",
    "WhatsApp / Mobile Number":"வாட்ஸ்அப் / கைப்பேசி எண்","PH:10-digit number":"10 இலக்க எண்","Your Taluk or Village":"உங்கள் வட்டம் அல்லது கிராமம்",
    "PH:e.g. Sankarapuram Town":"எ.கா. சங்கராபுரம் நகரம்","Register as Verifier":"சரிபார்ப்பாளராகப் பதிவு செய்",
    /* account */
    "Anbarasi K.":"அன்பரசி கே.","Verified Resident & Family Caregiver":"சரிபார்க்கப்பட்ட குடியிருப்பாளர் & குடும்பப் பராமரிப்பாளர்",
    "Tirukoilur Taluk, Kallakurichi District":"திருக்கோவிலூர் வட்டம், கள்ளக்குறிச்சி மாவட்டம்","Member since Oct 2024":"அக்டோபர் 2024 முதல் உறுப்பினர்",
    "Apply for VHN Field Volunteer Badge":"VHN களத் தன்னார்வலர் பதக்கத்திற்கு விண்ணப்பி","Edit Details":"விவரங்களைத் திருத்து",
    "Saved Facilities (2)":"சேமித்த மையங்கள் (2)","Alert Triggers (2)":"எச்சரிக்கைத் தூண்டல்கள் (2)","Civic Audits (3)":"குடிமைத் தணிக்கைகள் (3)",
    "Offline Pocket Card":"ஆஃப்லைன் பாக்கெட் அட்டை","Account & Settings":"கணக்கு & அமைப்புகள்",
    "Saved Facilities & Monitored Clinics":"சேமித்த மையங்கள் & கண்காணிக்கப்படும் மருத்துவமனைகள்","2 Active Units":"2 செயலில் உள்ள பிரிவுகள்",
    "Public Taluk Hospital":"பொது வட்ட மருத்துவமனை",
    "North Street, Tirukoilur • 2.4 km away (Taluk Head Quarter)":"வடக்குத் தெரு, திருக்கோவிலூர் • 2.4 கி.மீ தொலைவில் (வட்டத் தலைமையகம்)",
    "Dialysis Units":"டயாலிசிஸ் பிரிவுகள்","3 of 4 Working":"4-ல் 3 இயங்குகின்றன","Nephrologist":"சிறுநீரக மருத்துவர்",
    "Dr. R. Sundaram":"டாக்டர் ஆர். சுந்தரம்","Till 4 PM today":"இன்று மாலை 4 மணி வரை","Oxygen Reserve":"ஆக்சிஜன் இருப்பு","Full (98%)":"முழுமை (98%)",
    "Call Desk: 04153-252100":"அழைப்பு மையம்: 04153-252100","Share Details":"விவரங்களைப் பகிர்","Verified yesterday":"நேற்று சரிபார்க்கப்பட்டது",
    "Empaneled Trust Clinic":"அங்கீகரிக்கப்பட்ட டிரஸ்ட் கிளினிக்","Annai Karunya Dialysis Center":"அன்னை கருணை டயாலிசிஸ் மையம்",
    "Sankarapuram Bypass Road • 6.8 km away":"சங்கராபுரம் புறவழிச்சாலை • 6.8 கி.மீ தொலைவில்","Fresenius Stations":"ஃப்ரீசீனியஸ் இயந்திரங்கள்",
    "2 of 3 Active":"3-ல் 2 செயலில்","Technician":"தொழில்நுட்பர்","Selvan K.":"செல்வன் கே.","On Duty Available":"பணியில் உள்ளார்",
    "CMCHIS Scheme":"CMCHIS திட்டம்","Active Accepted":"செயலில் ஏற்கப்படுகிறது","Desk: 04153-245678":"மையம்: 04153-245678",
    "Directions":"வழிகாட்டு","WhatsApp Location":"வாட்ஸ்அப் இருப்பிடம்",
    "Machine & Availability SMS/WhatsApp Triggers":"இயந்திரம் & இருப்பு SMS/வாட்ஸ்அப் தூண்டல்கள்","Add Custom Trigger":"புதிய தூண்டலைச் சேர்",
    "Tirukoilur GH Nephrologist Doctor Attendance":"திருக்கோவிலூர் அரசு மருத்துவமனை சிறுநீரக மருத்துவர் வருகை",
    "Via SMS & WhatsApp":"SMS & வாட்ஸ்அப் வழியாக","Verified by Daily VHN Roster":"தினசரி VHN பட்டியல் மூலம் சரிபார்க்கப்பட்டது","ENABLED":"இயக்கத்தில்",
    "Annai Karunya Dialysis Line Filter Stock":"அன்னை கருணை டயாலிசிஸ் வடிகட்டி இருப்பு","WhatsApp ping":"வாட்ஸ்அப் அறிவிப்பு",
    "Restock Inventory Alert":"இருப்பு நிரப்பல் எச்சரிக்கை","Dispatch Delivery Channels":"அறிவிப்பு அனுப்பும் வழிகள்",
    "SMS (Rural Fallback)":"SMS (கிராமப்புற மாற்று)","No data network needed":"தரவு நெட்வொர்க் தேவையில்லை","WhatsApp Broadcast":"வாட்ஸ்அப் பரப்புரை",
    "In-App Notice":"செயலி அறிவிப்பு","Next portal login check":"அடுத்த உள்நுழைவில் காண்பிக்கப்படும்",
    "My Civic Verification Log":"எனது குடிமைச் சரிபார்ப்புப் பதிவு","3 Contributions Active":"3 பங்களிப்புகள் செயலில்",
    "Reported X-Ray unit queue delay at Sankarapuram PHC":"சங்கராபுரம் PHC-யில் எக்ஸ்-ரே பிரிவு வரிசைத் தாமதம் தெரிவிக்கப்பட்டது",
    "Approved by VHN Anita, RN":"VHN அனிதா, RN ஒப்புதல்","+15 Civic Rep":"+15 குடிமைப் புள்ளிகள்","+10 Civic Rep":"+10 குடிமைப் புள்ளிகள்","Published":"வெளியிடப்பட்டது",
    "Wheelchair Ramp Access verified at Tirukoilur GH Annex":"திருக்கோவிலூர் அரசு மருத்துவமனை இணைப்புக் கட்டடத்தில் சக்கர நாற்காலி சாய்தளம் சரிபார்க்கப்பட்டது",
    "Verified via Geo-tag":"புவி-குறியீடு மூலம் சரிபார்க்கப்பட்டது","Taluk Pocket Health Card":"வட்டப் பாக்கெட் சுகாதார அட்டை","OFFLINE READY":"ஆஃப்லைன் தயார்",
    "Local Cache Status:":"உள்ளூர் சேமிப்பு நிலை:","Synced Today, 08:30 AM (2.4 MB)":"இன்று காலை 08:30-க்கு ஒத்திசைக்கப்பட்டது (2.4 MB)",
    "Download Printable PDF Card (A4)":"அச்சிடக்கூடிய PDF அட்டையைப் பதிவிறக்கு (A4)","Force Re-sync Directory":"பட்டியலை மீண்டும் ஒத்திசை",
    "Offline Resilient Storage Overview":"ஆஃப்லைன் சேமிப்புக் கண்ணோட்டம்","Dialysis Units Indexed:":"பட்டியலிடப்பட்ட டயாலிசிஸ் பிரிவுகள்:",
    "7 Units across Taluk":"வட்டம் முழுவதும் 7 பிரிவுகள்","Direct Hotline Access:":"நேரடி அவசர எண் அணுகல்:","Zero Latency Enabled":"தாமதமின்றி இயங்கும்",
    "Verified for emergency offline dispatch in Kallakurichi district.":"கள்ளக்குறிச்சி மாவட்டத்தில் அவசர ஆஃப்லைன் பயன்பாட்டிற்குச் சரிபார்க்கப்பட்டது.",
    "Account Profile Details":"கணக்கு விவரங்கள்","Full Legal Name (as per Smart Card)":"முழுப் பெயர் (ஸ்மார்ட் கார்டு படி)",
    "Primary Mobile for OTP & Triggers":"OTP & அறிவிப்புகளுக்கான முதன்மைக் கைப்பேசி","Update Account Profile":"கணக்கு விவரங்களைப் புதுப்பி",
    "Language & Dialect":"மொழி & வழக்கு","Standard":"நிலையானது","Tamil Regional Dialect Glossary":"தமிழ் வட்டார வழக்குச் சொற்களஞ்சியம்",
    "Data Privacy & Local Storage":"தரவுத் தனியுரிமை & உள்ளூர் சேமிப்பு","Clear Search Cache":"தேடல் சேமிப்பை அழி",
    "Export Saved Clinics":"சேமித்த மருத்துவமனைகளை ஏற்றுமதி செய்","Deactivate Resident Profile":"குடியிருப்பாளர் கணக்கைச் செயலிழக்கச் செய்",
    "Care Verified Civic Directory — Kallakurichi Health Division":"கேர் வெரிஃபைட் குடிமைப் பட்டியல் — கள்ளக்குறிச்சிச் சுகாதாரப் பிரிவு",
    "TN Health Helpline:":"தமிழ்நாடு சுகாதார உதவி எண்:","Emergency Ambulance:":"அவசர ஆம்புலன்ஸ்:",
    "WCAG 2.1 AAA Compliant":"WCAG 2.1 AAA இணக்கம்","Offline-First PWA":"ஆஃப்லைன்-முதல் PWA",
    /* sign-in */
    "Need immediate medical relief or ambulance dispatch?":"உடனடி மருத்துவ உதவி அல்லது ஆம்புலன்ஸ் தேவையா?",
    "Civic Access Portal":"குடிமை அணுகல் தளம்","• Tamil Nadu Public Health Registry":"• தமிழ்நாடு பொது சுகாதாரப் பதிவகம்",
    "Sign in to Care Verified":"கேர் வெரிஃபைட்டில் உள்நுழைக","Direct SSL Encrypted":"SSL குறியாக்கம்",
    "Resident & Public":"குடியிருப்பாளர் & பொதுமக்கள்","Field Verifier":"களச் சரிபார்ப்பாளர்","Admin & Staff":"நிர்வாகம் & பணியாளர்",
    "Why Sign In?":"ஏன் உள்நுழைய வேண்டும்?","Fast Mobile OTP":"விரைவுக் கைப்பேசி OTP","Password Login":"கடவுச்சொல் உள்நுழைவு",
    "No Aadhaar needed":"ஆதார் தேவையில்லை","Mobile Phone Number":"கைப்பேசி எண்","10-digit number":"10 இலக்க எண்",
    "One-Time Passcode (OTP)":"ஒருமுறைக் கடவுக்குறியீடு (OTP)","Resend OTP via WhatsApp / SMS":"OTP-ஐ வாட்ஸ்அப் / SMS-ல் மீண்டும் அனுப்பு",
    "PH:Enter 6-digit passcode":"6 இலக்கக் குறியீட்டை உள்ளிடவும்","Account Password":"கணக்குக் கடவுச்சொல்","Forgot password?":"கடவுச்சொல் மறந்துவிட்டதா?",
    "Accredited Field Auditors (VHN & ASHA)":"அங்கீகரிக்கப்பட்ட களத் தணிக்கையாளர்கள் (VHN & ASHA)",
    "Field Verifier ID (TN-VHN)":"களச் சரிபார்ப்பாளர் அடையாள எண் (TN-VHN)","4-Digit Field Security PIN":"4 இலக்கப் பாதுகாப்பு PIN",
    "District Officer Issued":"மாவட்ட அலுவலரால் வழங்கப்பட்டது","Authorized District Health Directorate":"அங்கீகரிக்கப்பட்ட மாவட்டச் சுகாதார இயக்குநரகம்",
    "Official Government / Directorate Email":"அரசு / இயக்குநரக மின்னஞ்சல்","e-Pramaan Passkey / 2FA Token":"e-பிரமாண் கடவுச்சாவி / 2FA டோக்கன்",
    "Enter Telemetry & Incident Console":"கண்காணிப்பு & நிகழ்வுக் கட்டுப்பாட்டு அறைக்குள் நுழை",
    "Why create a citizen account?":"குடிமக்கள் கணக்கு ஏன் உருவாக்க வேண்டும்?","Saved Taluk Bookmarks":"சேமித்த வட்டக் குறிப்புகள்",
    "Doctor Duty Alerts":"மருத்துவர் பணி எச்சரிக்கைகள்","Offline Phone Cache":"ஆஃப்லைன் தொலைபேசி சேமிப்பு","Civic Data Guarantee":"குடிமைத் தரவு உறுதிமொழி",
    "Back to Fast Resident Login":"விரைவுக் குடியிருப்பாளர் உள்நுழைவுக்குத் திரும்பு","Session initialized.":"அமர்வு தொடங்கப்பட்டது.",
    "State Health Registry Active":"மாநிலச் சுகாதாரப் பதிவகம் செயலில்","Node Audit: TN-DIR-2025":"தணிக்கை: TN-DIR-2025",
    "Works offline once opened. Your location stays on this device.":"ஒருமுறை திறந்தால் ஆஃப்லைனிலும் இயங்கும். உங்கள் இருப்பிடம் இந்தச் சாதனத்திலேயே இருக்கும்.",
    "Toll-Free Helplines:":"கட்டணமில்லா உதவி எண்கள்:","(Health Advice) •":"(சுகாதார ஆலோசனை) •","(Ambulance)":"(ஆம்புலன்ஸ்)",
    "WCAG AAA Certified":"WCAG AAA சான்றளிக்கப்பட்டது","© 2025 Care Verified Civic Trust":"© 2025 கேர் வெரிஃபைட் குடிமை அறக்கட்டளை",
    "Guest Access Granted: Browsing active clinic directory with direct hotline dialers enabled.":"விருந்தினர் அணுகல் வழங்கப்பட்டது: நேரடி அவசர எண்களுடன் மருத்துவமனைப் பட்டியலை உலாவலாம்."
  };
  var PREFIX = [
    ["Local volunteers, village health nurses","உள்ளூர் தன்னார்வலர்கள், கிராம சுகாதார செவிலியர்கள் (VHN), குடியிருப்பாளர்கள் இணைந்து கிராமப்புற சுகாதார நிலையத் தகவல்களை உண்மையாகவும் புதுப்பித்ததாகவும் வைத்திருக்கின்றனர்."],
    ["Choose how you wish to assist","இன்று மருத்துவமனைப் பதிவுகளுக்கு எவ்வாறு உதவ அல்லது புதுப்பிக்க விரும்புகிறீர்கள் என்பதைத் தேர்ந்தெடுங்கள். ஒவ்வொரு குறிப்பும் ஒரு அண்டை வீட்டாரின் வீண் பயணத்தைத் தவிர்க்கிறது."],
    ["Machine out of order, altered","இயந்திரம் பழுது, மருத்துவர் நேர மாற்றம், ஆம்புலன்ஸ் வழி மாற்றம் அல்லது உங்கள் உள்ளூர் சுகாதார நிலையத்தில் புதிய பொருட்கள் வந்தது போன்றவற்றைத் தெரிவிக்கவும்."],
    ["Has your village sub-center","கடந்த இரண்டு வாரங்களில் உங்கள் கிராம துணை நிலையம் சரிபார்க்கப்படவில்லையா? எங்கள் செவிலியர் குழு வருகைக்காகக் குறிப்பிடுங்கள்."],
    ["Local youth, college students, and active","உள்ளூர் இளைஞர்கள், கல்லூரி மாணவர்கள், ஊராட்சி உறுப்பினர்கள் வாரம் 30 நிமிடம் மருந்து இருப்பைச் சரிபார்க்கலாம்."],
    ["Dialyzer filter lines restocked","இன்று காலை டயலைசர் வடிகட்டி குழாய்கள் இருப்பு நிரப்பப்பட்டது. வழக்கமான டயாலிசிஸ் நேரங்கள் தாமதமின்றி தொடங்கின."],
    ["Confirmed on ground by Village Nurse","கள ஆய்வில் உறுதி செய்தவர்: கிராம செவிலியர் அன்பரசி (VHN பிரிவு 3)"],
    ["X-ray machine under maintenance","எக்ஸ்-ரே இயந்திரம் வெள்ளி மதியம் வரை பராமரிப்பில் உள்ளது. எலும்பியல் பரிசோதனை நோயாளிகள் கள்ளக்குறிச்சி அரசு மருத்துவமனைக்கு அனுப்பப்படுகிறார்கள்."],
    ["Biomedical technician ticket","உயிர்மருத்துவத் தொழில்நுட்பர் பணிச்சீட்டு #TN-7728 ஒதுக்கப்பட்டது. மாற்றுப் போக்குவரத்து ஆட்டோ மையத்திற்குத் தெரிவிக்கப்பட்டது."],
    ["New female obstetrician on duty","புதிய பெண் மகப்பேறு மருத்துவர் திங்கள் & வியாழன் காலை 9:00 – மதியம் 2:00 வரை பணியில் உள்ளார். கர்ப்பகாலப் பரிசோதனைகள், ஹீமோகுளோபின் பரிசோதனை கிடைக்கும்."],
    ["ASHA Worker Kasthuri confirmed","ஆஷா பணியாளர் கஸ்தூரி பணிப்பட்டியலையும் இலவச இரும்புச் சத்து மாத்திரை இருப்பையும் உறுதி செய்தார்"],
    ["Maternity triage and neonatal warmer","மகப்பேறு அவசரப் பிரிவு மற்றும் பச்சிளங்குழந்தை வெப்பக் கருவி இயங்குகிறது. அவசர சோலார் இன்வெர்ட்டர் பேட்டரி 8 மணி நேரம் தடையின்றி சோதிக்கப்பட்டது."],
    ["Verified by Panchayat Health Coordinator","சரிபார்த்தவர்: ஊராட்சிச் சுகாதார ஒருங்கிணைப்பாளர் கே. மதி"],
    ["Prefer speaking over phone","தொலைபேசியில் பேச விரும்புகிறீர்களா? ஆவணங்கள் இன்றி உங்கள் மாவட்டச் செவிலியர் அல்லது களச் சரிபார்ப்பாளரை நேரடியாகத் தொடர்பு கொள்ளுங்கள்."],
    ["Help village elders and mothers","இன்றைய மருத்துவர் வருகை, இரத்தப் பரிசோதனை இருப்பு குறித்து ஒரு சிறு குறிப்பைப் பகிர்ந்து, முதியோரும் தாய்மார்களும் வீண் அலைச்சலைத் தவிர்க்க உதவுங்கள்."],
    ["PH:Describe what you saw today","இன்று நீங்கள் கண்டதை விவரிக்கவும்..."],
    ["No login, password, or Aadhaar","உள்நுழைவு, கடவுச்சொல், ஆதார் எதுவும் தேவையில்லை. ஒவ்வொரு சமூகக் குறிப்பும் எங்கள் உள்ளூர் செவிலியர் சரிபார்ப்பாளரால் மதிப்பாய்வு செய்யப்படும்."],
    ["Tell us which village health sub-centre","எந்த கிராம சுகாதாரத் துணை நிலையத்தில் நேரடித் தணிக்கை தேவை என்று சொல்லுங்கள். வட்ட நடமாடும் சுகாதாரத் தொடர்பாளரை அனுப்புவோம்."],
    ["PH:e.g. Clinic remained locked","எ.கா. இரண்டு நாட்களாக காலை 11 மணிக்குப் பின்னும் மருத்துவமனை பூட்டியே இருந்தது"],
    ["Open to local youth, college students, retired","கள்ளக்குறிச்சி மற்றும் விழுப்புரத்தில் உள்ள உள்ளூர் இளைஞர்கள், கல்லூரி மாணவர்கள், ஓய்வுபெற்ற பணியாளர்கள், சமூக உறுப்பினர்கள் அனைவரும் இணையலாம்."],
    ["We eliminate the anxiety","காலியான கிராமப்புறக் கிளினிக்கிற்குச் சென்று ஏமாறும் பதட்டத்தையும், நேரம் கடந்தபின் எக்ஸ்-ரே இயந்திரம் பழுதாக இருப்பதைக் காணும் சிரமத்தையும் நாங்கள் நீக்குகிறோம்."],
    ["Find hospitals and clinics that actually have","இன்று உண்மையிலேயே குறிப்பிட்ட இயந்திரமும் சிறப்பு மருத்துவரும் தயாராக உள்ள மருத்துவமனைகளையும் கிளினிக்குகளையும் கண்டறியுங்கள்."],
    ["Freshness badges show when staff","பணியாளர்களோ சமூகச் சரிபார்ப்பாளர்களோ கடைசியாக வேலை நேரம், இயந்திரங்கள், மருத்துவர் இருப்பை உறுதி செய்த நேரத்தை புதுமைச் சின்னங்கள் காட்டும்."],
    ["One-tap direct calling and clear distance","ஒரே தொடுதலில் நேரடி அழைப்பும், கிலோமீட்டரில் தெளிவான தூரத் தகவலும் — எதிர்பாராத தாமதமின்றி சிகிச்சையை அடையலாம்."],
    ["Save this district handbook offline","இந்த மாவட்டக் கையேட்டை ஒரே தொடுதலில் உங்கள் தொலைபேசியில் ஆஃப்லைனில் சேமிக்கவும். முகவரிகளும் தொலைபேசி எண்களும் இணையமின்றி வேலை செய்யும்."],
    ["Empowering rural communities","சரிபார்க்கப்பட்ட மருத்துவமனை இருப்புத் தகவல் மூலம் கிராமப்புற மக்கள், புதிதாக வந்தவர்கள், பல தலைமுறைக் குடும்பங்களுக்கு வலுவூட்டுகிறோம்."],
    ["Instant broadcast if the specialist","சிறப்பு மருத்துவர் அவசர விடுப்பில் இருந்தாலோ காலை சுற்றில் இல்லாவிட்டாலோ உடனடி அறிவிப்பு."],
    ["Notify when High-Flux dialyzer","உயர்-பாய்வு டயலைசர் நுகர்பொருட்கள் 4 செட்டுகளுக்குக் கீழ் குறைந்தால் அறிவிக்கவும்."],
    ["Submitted 12 Nov 2024","சமர்ப்பிக்கப்பட்டது 12 நவ 2024 • எக்ஸ்-ரே படச்சுருள் இருப்பு செவிலியரால் நிரப்பப்பட்டது எனக் குறிப்பிடப்பட்டது."],
    ["Submitted 24 Oct 2024","சமர்ப்பிக்கப்பட்டது 24 அக் 2024 • கட்டில் மற்றும் சக்கர நாற்காலி நோயாளிகளுக்குத் தடையற்ற பாதை உறுதி செய்யப்பட்டது."],
    ["Tirukoilur & Kallakurichi offline directory","திருக்கோவிலூர் & கள்ளக்குறிச்சி ஆஃப்லைன் பட்டியல் உங்கள் சாதனத்தில் சேமிக்கப்பட்டுள்ளது. நெட்வொர்க் இல்லாமலும் உடனடி அவசர வழிகாட்டலை வழங்கும்."],
    ["The emergency directory contains verified","அவசரப் பட்டியலில் சரிபார்க்கப்பட்ட தொடர்பு விவரங்கள், படுக்கை எண்ணிக்கை, மருத்துவர் பட்டியல் ஆகியவை உங்கள் சாதனத்தில் சேமிக்கப்பட்டுள்ளன."],
    ["Select your primary script","மருத்துவச் சொற்கள், வழிகாட்டல், விளக்கங்களுக்கான உங்கள் முதன்மை எழுத்துமுறையைத் தேர்ந்தெடுக்கவும்."],
    ["Care Verified follows civic zero-tracking","கேர் வெரிஃபைட் கண்காணிப்பற்ற குடிமைத் தரநிலைகளைப் பின்பற்றுகிறது. மருத்துவப் பரிசோதனைகளோ தனிப்பட்ட மருத்துவமனை வருகைகளோ பதிவு செய்யப்படுவதில்லை."],
    ["This directory is maintained for public","இந்தப் பட்டியல் பொதுமக்கள் வெளிப்படைத்தன்மைக்காகப் பராமரிக்கப்படுகிறது; அவசர மருத்துவ ஆலோசனைக்கு மாற்றல்ல."],
    ["Emergency services, antivenom tracking","அவசர சேவைகள், பாம்புக்கடி மருந்து இருப்பு, ஆக்சிஜன் இருப்பு ஆகியவற்றுக்கு உள்நுழைவு தேவையில்லை."],
    ["Log in using your issued Health Worker ID","வழங்கப்பட்ட சுகாதாரப் பணியாளர் அடையாள எண்ணைக் கொண்டு உள்நுழைந்து, உபகரண இயக்கம், மருந்து இருப்பு ஆகியவற்றைப் புதுப்பிக்கலாம்."],
    ["Official access for Block Medical Officers","வட்டார மருத்துவ அலுவலர்கள் மற்றும் மாநிலப் பேரிடர் ஒருங்கிணைப்பாளர்களுக்கான அதிகாரப்பூர்வ அணுகல்."],
    ["Care Verified is an open civic registry","கேர் வெரிஃபைட் ஒரு திறந்த குடிமைப் பதிவகம். விருந்தினராகவும் உலாவலாம்; கணக்கு இருந்தால் தனிப்பயனாக்கிய வசதிகள் கிடைக்கும்."],
    ["Keep your local Primary Health Centres","உங்கள் உள்ளூர் ஆரம்ப சுகாதார நிலையங்களையும் துணை நிலையங்களையும் உங்கள் கைப்பேசி முகப்பில் இணைத்து வைக்கவும்."],
    ["Receive alerts when pediatricians","குழந்தை மருத்துவர்கள், டயாலிசிஸ் படுக்கைகள், பாம்புக்கடி மருந்து இருப்பு நேரில் சரிபார்க்கப்பட்டால் அறிவிப்பு பெறுங்கள்."],
    ["Saved emergency contacts and doctor","சேமித்த அவசர எண்களும் மருத்துவர் அட்டவணைகளும் செல்போன் கோபுரம் செயலிழந்தாலும் கிடைக்கும்."],
    ["256-bit encryption. Zero advertisements","256-பிட் குறியாக்கம். விளம்பரங்கள் இல்லை. ஆதார் எண் தேவையில்லை. உங்கள் சுகாதாரத் தேடல்கள் கண்காணிக்கப்படுவதில்லை."]
  ];

  var store = new WeakMap();
  function norm(s) { return s.replace(/\s+/g, " ").trim(); }
  function lookup(t) {
    if (!t) return null;
    if (EXACT.hasOwnProperty(t)) return EXACT[t];
    var m = t.match(/^Verified (\d+) days? ago$/);
    if (m) return m[1] === "1" ? "1 நாளுக்கு முன் சரிபார்க்கப்பட்டது" : m[1] + " நாட்களுக்கு முன் சரிபார்க்கப்பட்டது";
    for (var i = 0; i < PREFIX.length; i++) if (t.indexOf(PREFIX[i][0]) === 0) return PREFIX[i][1];
    return null;
  }
  function skipEl(el) {
    return !el || el.closest("script,style,noscript,[data-i18n-skip],.material-symbols-outlined");
  }
  function apply(root, lang) {
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var n, nodes = [];
    while ((n = w.nextNode())) nodes.push(n);
    nodes.forEach(function (node) {
      if (skipEl(node.parentElement)) return;
      if (!store.has(node)) {
        if (!norm(node.nodeValue)) return;
        store.set(node, node.nodeValue);
      }
      var orig = store.get(node);
      if (lang === "ta") {
        var tr = lookup(norm(orig));
        if (tr) {
          var lead = (orig.match(/^\s*/) || [""])[0], trail = (orig.match(/\s*$/) || [""])[0];
          node.nodeValue = lead + tr + trail;
        }
      } else node.nodeValue = orig;
    });
    var els = root.querySelectorAll ? root.querySelectorAll("[placeholder]") : [];
    Array.prototype.forEach.call(els, function (el) {
      if (!el.hasAttribute("data-cv-ph")) el.setAttribute("data-cv-ph", el.getAttribute("placeholder"));
      var o = el.getAttribute("data-cv-ph");
      var tr = lang === "ta" ? lookup("PH:" + norm(o)) : null;
      el.setAttribute("placeholder", tr || o);
    });
  }
  var obs = new MutationObserver(function (muts) {
    if (current !== "ta") return;
    muts.forEach(function (m) {
      Array.prototype.forEach.call(m.addedNodes, function (nd) {
        if (nd.nodeType === 1) apply(nd, "ta");
        else if (nd.nodeType === 3 && nd.parentElement) apply(nd.parentElement, "ta");
      });
    });
  });
  var current = "en";
  function setLang(l) {
    current = l === "ta" ? "ta" : "en";
    try { localStorage.setItem(KEY, current); } catch (e) {}
    document.documentElement.lang = current;
    apply(document.body, current);
    Array.prototype.forEach.call(document.querySelectorAll(".cv-lang button"), function (b) {
      b.classList.toggle("on", b.getAttribute("data-l") === current);
    });
  }
  window.cvSetLang = setLang;
  obs.observe(document.body, { childList: true, subtree: true });
  var saved = "en"; try { saved = localStorage.getItem(KEY) || "en"; } catch (e) {}
  setLang(saved);
})();
