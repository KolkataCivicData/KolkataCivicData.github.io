import React, { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceArea, ReferenceLine } from 'recharts';
import { Calendar, Info, BarChart3, MapPin, AlertTriangle, Menu, X, Wind, Sun, FileText, User, Building2, MessageCircle } from 'lucide-react';

// --- DATA SOURCE: PARLIAMENT QUESTIONS (HEAT WAVE) ---
const parliamentData = [
  {
    id: "645",
    member: "Ms. S Jothimani",
    ministry: "EARTH SCIENCES",
    type: "UNSTARRED",
    date: "03-Dec-2025",
    subject: "Heatwaves and floods in cities",
    question: "Whether it is true that the ICMR-Global South research has projected urban heatwaves and erratic rainfall events to double in cities like Chennai by 2030 and if so, the immediate steps taken/being taken by the Government to mitigate these risks; the number of extreme weather events including heatwaves, flash floods and cloudbursts recorded across the Country during the first half of 2025 in comparison with earlier years; the status of the Government's efforts to implement 'Bharat Forecast System' and urban flood forecasting tools such as C-FLOWS particularly for coastal metros like Chennai; and whether enhanced early warning systems and city level decision support platforms are being scaled up in collaboration with IMD and State Governments to improve disaster preparedness?",
    answer: "The Government is aware of the earlier reports suggesting that cities like Chennai will face significant rise in heatwave days and extreme rainfall events by 2030. The India Meteorological Department (IMD) continuously monitors extreme weather events. Details on the number of extreme events in 2025 are being compiled. Regarding C-FLOWS, it is an integrated GIS-based decision support system for urban flood management, currently operational for Chennai. The 'Bharat Forecast System' is part of ongoing upgrades to enhance high-resolution modeling capabilities. IMD collaborates with state governments to scale up early warning systems and decision support platforms to improve disaster preparedness.",
    pdf: "AU645_uyLEo9.pdf"
  },
  {
    id: "461",
    member: "Shri Y S Avinash Reddy",
    ministry: "EARTH SCIENCES",
    type: "UNSTARRED",
    date: "03-Dec-2025",
    subject: "Mapping of Heatwaves",
    question: "Whether the Government is planning to invest in latest advancements in geospatial technology and field-based assessments to provide effective mapping of heatwaves, such as granular scale heat vulnerability and hotspot mapping and if so, the details thereof; whether the Government is also planning to mandate establishment of locally-defined temperature thresholds in all heat action plans taking into account the local risk multipliers while declaring a heatwave to provide a more region-specific approach; and whether the Government is also contemplating to reform forecast models to region-specific thresholds for energy and water demand, crop and health impacts to enable impact-based heat forecast alerts?",
    answer: "Yes. The India Meteorological Department (IMD) provides heatwave forecasts and warnings at multiple spatial and temporal scales. A web-based GIS system for heatwave information is available. IMD has prepared a Climate Hazards and Vulnerability Atlas of India, identifying hotspots. IMD defines heatwave conditions based on temperature thresholds and considers station-wise percentile-based analysis of temperature, humidity, and wind. Heat wave alerts are tailored to geographic characteristics (plain, hilly, coastal). Impact-based forecasts are issued in colour-coded formats.",
    pdf: "AU461_Bbj84B.pdf"
  },
  {
    id: "4494",
    member: "Shri Asaduddin Owaisi",
    ministry: "EARTH SCIENCES",
    type: "UNSTARRED",
    date: "20-Aug-2025",
    subject: "Cities Facing Double Heatwave and Extreme Rainfall",
    question: "Whether the Government is aware of the recent report titled 'Weathering the Storm: Managing Monsoons in a Warming Climate', which projects that cities in India will face a two-fold rise in heatwave days and increase in extreme rainfall events by the year 2030 and if so, the details thereof; whether the Government maintains granular city-level and district-level data on the incidence of extreme heat and extreme rainfall during the last two decades; whether any measures have been taken to establish Climate Risk Observatory (CRO) or similar body; and the steps taken/being taken to provide financial assistance to urban local bodies in climate-vulnerable regions?",
    answer: "Yes. The Government is aware of the recent reports. IMD maintains granular data on extreme weather events. While there is no specific 'Climate Risk Observatory' by that name, the existing network of observatories and the Climate Hazards and Vulnerability Atlas serve similar purposes of risk assessment. Financial assistance for disaster mitigation is provided through State Disaster Response Funds (SDRF) and National Disaster Response Funds (NDRF) as per established guidelines.",
    pdf: "AU4494_wZjXVU.pdf"
  },
  {
    id: "2071",
    member: "Shri Sudama Prasad & Shri Raja Ram Singh",
    ministry: "EARTH SCIENCES",
    type: "UNSTARRED",
    date: "12-Mar-2025",
    subject: "Death Caused by Heatwave",
    question: "Whether the Government has any plans to declare heatwave as a natural disaster; if so, the details thereof; whether the Government has any data about the number of people who died in the recent heatwave especially informal and gig workers; if so, the details thereof; and whether the Government has any plans to provide compensation to people who died during the heatwave and if so, the details thereof and if not, the reasons therefor?",
    answer: "Currently, the notified list of disasters eligible for NDRF/SDRF assistance includes 12 disasters (cyclones, droughts, earthquakes, etc.). Heatwave is not on the national notified list, but the 15th Finance Commission noted that states can use up to 10% of their SDRF for local disasters, and several states have notified heatwaves as local disasters. Data on deaths is maintained by the NCRB/MHA. Compensation policies vary by state based on their local disaster notifications.",
    pdf: "AU2071_kJE2AA.pdf"
  },
  {
    id: "1285",
    member: "Shri Putta Mahesh Kumar",
    ministry: "FISHERIES, ANIMAL HUSBANDRY AND DAIRYING",
    type: "UNSTARRED",
    date: "11-Feb-2025",
    subject: "Impact of Heatwaves",
    question: "Whether the Government has conducted any study/survey into the impact of heatwaves on the fisheries-based business in the country during the last five years; if so, the details regarding losses suffered; details regarding the total number of fisheries that had to shut down; steps taken by the Government to reduce losses; and whether any campaign/initiative to raise awareness regarding the impact of heatwaves on fisheries has been undertaken?",
    answer: "The fisheries research institutes under ICAR have been studying climate impacts. Advisories are issued through village-level fisheries assistants. Under Pradhan Mantri Matsya Sampada Yojana (PMMSY), 100 coastal fishermen villages have been identified as Climate Resilient Coastal Fishermen Villages (CRCFV) for focused investment. Initiatives include seaweed cultivation, artificial reefs, and green fuel use to enhance resilience. Training and awareness programs are also supported.",
    pdf: "AU1285_E4oTeT.pdf"
  },
  {
    id: "2661",
    member: "Shri Charanjit Singh Channi",
    ministry: "EARTH SCIENCES",
    type: "UNSTARRED",
    date: "07-Aug-2024",
    subject: "Deaths in Punjab due to Heatwaves",
    question: "Whether the Government has any data regarding the deaths in Punjab, due to heatwave in last two years and if so, the details thereof; whether the Government has any specific data and details of the reasons causing extreme heatwave in Jalandhar; and whether the Government has provided any compensation to the families of those deceased persons who died because of the heatwave?",
    answer: "Yes. The latest details are given as per the National Crime Record Bureau (NCRB). Due to climate change, annual temperature is increasing globally, reflected in rising frequency of heatwaves in northern plains including Punjab. Specific micro-level reasons for Jalandhar are part of broader regional trends. Compensation is a state subject; some states provide relief from SDRF if notified as a local disaster.",
    pdf: "AU2661_3Ss0SS.pdf"
  },
  {
    id: "418",
    member: "Shri Sukhdeo Bhagat",
    ministry: "EARTH SCIENCES",
    type: "UNSTARRED",
    date: "24-Jul-2024",
    subject: "Deaths caused due to Heatwave",
    question: "The details of the deaths caused due to heatwaves from 2013 till date, State-wise; the details of the steps being taken/proposed to be taken by the Government in lieu of the report concerning increase in severe heatwaves across the country in the coming years; and whether the Government proposes to declare heatwaves as a national calamity?",
    answer: "Details of deaths are provided based on NCRB data. IMD has taken various steps to improve monitoring and early warning systems, including seasonal outlooks and extended range forecasts. A District-wise heatwave vulnerability Atlas has been prepared. Heat Action Plans (HAPs) are being implemented in 23 states. Regarding declaring it a national calamity, existing guidelines for NDRF/SDRF cover 12 specific disasters, but states have flexibility to declare local disasters.",
    pdf: "AU418_SS70jx.pdf"
  },
  {
    id: "355",
    member: "Shri P V Midhun Reddy",
    ministry: "EARTH SCIENCES",
    type: "UNSTARRED",
    date: "24-Jul-2024",
    subject: "Mapping Heatwaves",
    question: "Whether the Government is looking into investing in latest advanced geospatial technology and field-based assessments to provide effective mapping of heatwaves, such as granular scale heat vulnerability and hotspot mapping; whether the Government is planning to mandate establishment of locally-defined temperature thresholds in all Heat Action Plans; and whether the Government has any plans to reform forecast models to region-specific thresholds for energy and water demand?",
    answer: "Yes. IMD issues forecasts and warnings related to heatwaves in different spatial and temporal scales. A web-based GIS system is available for heatwave information. IMD has prepared a Climate Hazards and Vulnerability Atlas of India. Heatwave conditions are defined based on temperature criteria and percentile-based analysis of local meteorological parameters. Forecast model products are used to issue early warning alerts to help policy makers plan in advance.",
    pdf: "AU355_l719hl.pdf"
  }
];

// --- DATA SOURCE: AQI (AIR POLLUTION) ---
const rawData = [
  {"month": "January", "monthIndex": 0, "day": 1, "Victoria": 211.0, "Fort_William": 144.0, "Rabindra_Bharati": 122.0, "Bidhannagar": 158.0, "Jadavpur": 221.0, "Rabindra_Sarobar": 176.0, "Ballygunge": 230.0},
  {"month": "January", "monthIndex": 0, "day": 2, "Victoria": 251.0, "Fort_William": 169.0, "Rabindra_Bharati": 131.0, "Bidhannagar": 183.0, "Jadavpur": 256.0, "Rabindra_Sarobar": 194.0, "Ballygunge": 241.0},
  {"month": "January", "monthIndex": 0, "day": 3, "Victoria": 204.0, "Fort_William": 142.0, "Rabindra_Bharati": 163.0, "Bidhannagar": 137.0, "Jadavpur": 184.0, "Rabindra_Sarobar": 144.0, "Ballygunge": 188.0},
  {"month": "January", "monthIndex": 0, "day": 4, "Victoria": 209.0, "Fort_William": 124.0, "Rabindra_Bharati": 120.0, "Bidhannagar": 121.0, "Jadavpur": 206.0, "Rabindra_Sarobar": 146.0, "Ballygunge": 198.0},
  {"month": "January", "monthIndex": 0, "day": 5, "Victoria": 262.0, "Fort_William": null, "Rabindra_Bharati": 240.0, "Bidhannagar": 203.0, "Jadavpur": 262.0, "Rabindra_Sarobar": 230.0, "Ballygunge": 250.0},
  {"month": "January", "monthIndex": 0, "day": 6, "Victoria": 249.0, "Fort_William": 158.0, "Rabindra_Bharati": 213.0, "Bidhannagar": 164.0, "Jadavpur": 250.0, "Rabindra_Sarobar": 203.0, "Ballygunge": 253.0},
  {"month": "January", "monthIndex": 0, "day": 7, "Victoria": 265.0, "Fort_William": 265.0, "Rabindra_Bharati": 167.0, "Bidhannagar": 196.0, "Jadavpur": 266.0, "Rabindra_Sarobar": 208.0, "Ballygunge": 269.0},
  {"month": "January", "monthIndex": 0, "day": 8, "Victoria": 291.0, "Fort_William": 307.0, "Rabindra_Bharati": 147.0, "Bidhannagar": 241.0, "Jadavpur": 262.0, "Rabindra_Sarobar": 262.0, "Ballygunge": 304.0},
  {"month": "January", "monthIndex": 0, "day": 9, "Victoria": 273.0, "Fort_William": 286.0, "Rabindra_Bharati": 231.0, "Bidhannagar": 223.0, "Jadavpur": 222.0, "Rabindra_Sarobar": 239.0, "Ballygunge": 274.0},
  {"month": "January", "monthIndex": 0, "day": 10, "Victoria": 278.0, "Fort_William": null, "Rabindra_Bharati": 208.0, "Bidhannagar": 257.0, "Jadavpur": 226.0, "Rabindra_Sarobar": 227.0, "Ballygunge": 271.0},
  {"month": "January", "monthIndex": 0, "day": 11, "Victoria": 270.0, "Fort_William": 281.0, "Rabindra_Bharati": 184.0, "Bidhannagar": 229.0, "Jadavpur": 228.0, "Rabindra_Sarobar": 227.0, "Ballygunge": 252.0},
  {"month": "January", "monthIndex": 0, "day": 12, "Victoria": 247.0, "Fort_William": 255.0, "Rabindra_Bharati": 128.0, "Bidhannagar": 190.0, "Jadavpur": 212.0, "Rabindra_Sarobar": 174.0, "Ballygunge": 233.0},
  {"month": "January", "monthIndex": 0, "day": 13, "Victoria": 211.0, "Fort_William": 181.0, "Rabindra_Bharati": 97.0, "Bidhannagar": 110.0, "Jadavpur": 177.0, "Rabindra_Sarobar": 112.0, "Ballygunge": 189.0},
  {"month": "January", "monthIndex": 0, "day": 14, "Victoria": 198.0, "Fort_William": 181.0, "Rabindra_Bharati": 140.0, "Bidhannagar": 120.0, "Jadavpur": 172.0, "Rabindra_Sarobar": 149.0, "Ballygunge": 169.0},
  {"month": "January", "monthIndex": 0, "day": 15, "Victoria": 162.0, "Fort_William": 161.0, "Rabindra_Bharati": 108.0, "Bidhannagar": 100.0, "Jadavpur": 126.0, "Rabindra_Sarobar": 108.0, "Ballygunge": 143.0},
  {"month": "January", "monthIndex": 0, "day": 16, "Victoria": 163.0, "Fort_William": 130.0, "Rabindra_Bharati": 117.0, "Bidhannagar": 120.0, "Jadavpur": 148.0, "Rabindra_Sarobar": 118.0, "Ballygunge": 152.0},
  {"month": "January", "monthIndex": 0, "day": 17, "Victoria": 164.0, "Fort_William": 159.0, "Rabindra_Bharati": 136.0, "Bidhannagar": 130.0, "Jadavpur": 158.0, "Rabindra_Sarobar": 127.0, "Ballygunge": 156.0},
  {"month": "January", "monthIndex": 0, "day": 18, "Victoria": 168.0, "Fort_William": 176.0, "Rabindra_Bharati": 118.0, "Bidhannagar": 118.0, "Jadavpur": 151.0, "Rabindra_Sarobar": 132.0, "Ballygunge": 153.0},
  {"month": "January", "monthIndex": 0, "day": 19, "Victoria": 172.0, "Fort_William": 204.0, "Rabindra_Bharati": 134.0, "Bidhannagar": 128.0, "Jadavpur": 171.0, "Rabindra_Sarobar": 142.0, "Ballygunge": 158.0},
  {"month": "January", "monthIndex": 0, "day": 20, "Victoria": 199.0, "Fort_William": 223.0, "Rabindra_Bharati": 150.0, "Bidhannagar": 151.0, "Jadavpur": 189.0, "Rabindra_Sarobar": 166.0, "Ballygunge": 190.0},
  {"month": "January", "monthIndex": 0, "day": 21, "Victoria": 258.0, "Fort_William": 269.0, "Rabindra_Bharati": 194.0, "Bidhannagar": 213.0, "Jadavpur": 257.0, "Rabindra_Sarobar": 222.0, "Ballygunge": 249.0},
  {"month": "January", "monthIndex": 0, "day": 22, "Victoria": 285.0, "Fort_William": 305.0, "Rabindra_Bharati": 235.0, "Bidhannagar": 236.0, "Jadavpur": 274.0, "Rabindra_Sarobar": 249.0, "Ballygunge": 284.0},
  {"month": "January", "monthIndex": 0, "day": 23, "Victoria": 279.0, "Fort_William": 308.0, "Rabindra_Bharati": 202.0, "Bidhannagar": 222.0, "Jadavpur": 267.0, "Rabindra_Sarobar": 261.0, "Ballygunge": 281.0},
  {"month": "January", "monthIndex": 0, "day": 24, "Victoria": 244.0, "Fort_William": 298.0, "Rabindra_Bharati": 182.0, "Bidhannagar": 213.0, "Jadavpur": 240.0, "Rabindra_Sarobar": 235.0, "Ballygunge": 271.0},
  {"month": "January", "monthIndex": 0, "day": 25, "Victoria": 209.0, "Fort_William": 268.0, "Rabindra_Bharati": 173.0, "Bidhannagar": 181.0, "Jadavpur": 192.0, "Rabindra_Sarobar": 201.0, "Ballygunge": 221.0},
  {"month": "January", "monthIndex": 0, "day": 26, "Victoria": 148.0, "Fort_William": 196.0, "Rabindra_Bharati": 144.0, "Bidhannagar": 113.0, "Jadavpur": 128.0, "Rabindra_Sarobar": 139.0, "Ballygunge": 155.0},
  {"month": "January", "monthIndex": 0, "day": 27, "Victoria": 142.0, "Fort_William": 170.0, "Rabindra_Bharati": 140.0, "Bidhannagar": 115.0, "Jadavpur": 147.0, "Rabindra_Sarobar": 132.0, "Ballygunge": 147.0},
  {"month": "January", "monthIndex": 0, "day": 28, "Victoria": 150.0, "Fort_William": 159.0, "Rabindra_Bharati": 130.0, "Bidhannagar": 122.0, "Jadavpur": 164.0, "Rabindra_Sarobar": 141.0, "Ballygunge": 168.0},
  {"month": "January", "monthIndex": 0, "day": 29, "Victoria": 158.0, "Fort_William": 160.0, "Rabindra_Bharati": 150.0, "Bidhannagar": 133.0, "Jadavpur": 185.0, "Rabindra_Sarobar": 154.0, "Ballygunge": 172.0},
  {"month": "January", "monthIndex": 0, "day": 30, "Victoria": 157.0, "Fort_William": 149.0, "Rabindra_Bharati": 139.0, "Bidhannagar": 140.0, "Jadavpur": 171.0, "Rabindra_Sarobar": 147.0, "Ballygunge": 176.0},
  {"month": "January", "monthIndex": 0, "day": 31, "Victoria": 149.0, "Fort_William": 152.0, "Rabindra_Bharati": 135.0, "Bidhannagar": 147.0, "Jadavpur": 146.0, "Rabindra_Sarobar": 113.0, "Ballygunge": 156.0},
  {"month": "February", "monthIndex": 1, "day": 1, "Victoria": 114.0, "Fort_William": 120.0, "Rabindra_Bharati": 103.0, "Bidhannagar": 119.0, "Jadavpur": 102.0, "Rabindra_Sarobar": 78.0, "Ballygunge": 98.0},
  {"month": "February", "monthIndex": 1, "day": 2, "Victoria": 133.0, "Fort_William": 149.0, "Rabindra_Bharati": 132.0, "Bidhannagar": 164.0, "Jadavpur": 116.0, "Rabindra_Sarobar": 84.0, "Ballygunge": 116.0},
  {"month": "February", "monthIndex": 1, "day": 3, "Victoria": 155.0, "Fort_William": 150.0, "Rabindra_Bharati": 124.0, "Bidhannagar": 188.0, "Jadavpur": 117.0, "Rabindra_Sarobar": 100.0, "Ballygunge": 144.0},
  {"month": "February", "monthIndex": 1, "day": 4, "Victoria": 190.0, "Fort_William": 195.0, "Rabindra_Bharati": 145.0, "Bidhannagar": 192.0, "Jadavpur": 195.0, "Rabindra_Sarobar": 136.0, "Ballygunge": 179.0},
  {"month": "February", "monthIndex": 1, "day": 5, "Victoria": 187.0, "Fort_William": 174.0, "Rabindra_Bharati": null, "Bidhannagar": 161.0, "Jadavpur": 171.0, "Rabindra_Sarobar": 99.0, "Ballygunge": 141.0},
  {"month": "February", "monthIndex": 1, "day": 6, "Victoria": 141.0, "Fort_William": 128.0, "Rabindra_Bharati": null, "Bidhannagar": 125.0, "Jadavpur": 170.0, "Rabindra_Sarobar": 96.0, "Ballygunge": 126.0},
  {"month": "February", "monthIndex": 1, "day": 7, "Victoria": 168.0, "Fort_William": 134.0, "Rabindra_Bharati": null, "Bidhannagar": 163.0, "Jadavpur": 186.0, "Rabindra_Sarobar": 106.0, "Ballygunge": 134.0},
  {"month": "February", "monthIndex": 1, "day": 8, "Victoria": 117.0, "Fort_William": 116.0, "Rabindra_Bharati": 111.0, "Bidhannagar": 122.0, "Jadavpur": 119.0, "Rabindra_Sarobar": 89.0, "Ballygunge": 106.0},
  {"month": "February", "monthIndex": 1, "day": 9, "Victoria": 110.0, "Fort_William": 123.0, "Rabindra_Bharati": 100.0, "Bidhannagar": 110.0, "Jadavpur": 118.0, "Rabindra_Sarobar": 84.0, "Ballygunge": 107.0},
  {"month": "February", "monthIndex": 1, "day": 10, "Victoria": 130.0, "Fort_William": 134.0, "Rabindra_Bharati": 112.0, "Bidhannagar": 154.0, "Jadavpur": 170.0, "Rabindra_Sarobar": 101.0, "Ballygunge": 152.0},
  {"month": "February", "monthIndex": 1, "day": 11, "Victoria": 229.0, "Fort_William": 247.0, "Rabindra_Bharati": 147.0, "Bidhannagar": 222.0, "Jadavpur": 234.0, "Rabindra_Sarobar": 169.0, "Ballygunge": 232.0},
  {"month": "February", "monthIndex": 1, "day": 12, "Victoria": 242.0, "Fort_William": 252.0, "Rabindra_Bharati": 222.0, "Bidhannagar": 256.0, "Jadavpur": 257.0, "Rabindra_Sarobar": 204.0, "Ballygunge": 239.0},
  {"month": "February", "monthIndex": 1, "day": 13, "Victoria": 208.0, "Fort_William": 245.0, "Rabindra_Bharati": 196.0, "Bidhannagar": 230.0, "Jadavpur": 248.0, "Rabindra_Sarobar": 164.0, "Ballygunge": 218.0},
  {"month": "February", "monthIndex": 1, "day": 14, "Victoria": 239.0, "Fort_William": 257.0, "Rabindra_Bharati": 231.0, "Bidhannagar": 243.0, "Jadavpur": 258.0, "Rabindra_Sarobar": 205.0, "Ballygunge": 251.0},
  {"month": "February", "monthIndex": 1, "day": 15, "Victoria": 247.0, "Fort_William": 260.0, "Rabindra_Bharati": 218.0, "Bidhannagar": 239.0, "Jadavpur": 269.0, "Rabindra_Sarobar": 203.0, "Ballygunge": 267.0},
  {"month": "February", "monthIndex": 1, "day": 16, "Victoria": 191.0, "Fort_William": 213.0, "Rabindra_Bharati": 195.0, "Bidhannagar": 176.0, "Jadavpur": 224.0, "Rabindra_Sarobar": 167.0, "Ballygunge": 216.0},
  {"month": "February", "monthIndex": 1, "day": 17, "Victoria": 190.0, "Fort_William": 217.0, "Rabindra_Bharati": 214.0, "Bidhannagar": 194.0, "Jadavpur": 207.0, "Rabindra_Sarobar": 156.0, "Ballygunge": 204.0},
  {"month": "February", "monthIndex": 1, "day": 18, "Victoria": 134.0, "Fort_William": 137.0, "Rabindra_Bharati": 169.0, "Bidhannagar": 151.0, "Jadavpur": 147.0, "Rabindra_Sarobar": 105.0, "Ballygunge": 126.0},
  {"month": "February", "monthIndex": 1, "day": 19, "Victoria": 125.0, "Fort_William": 118.0, "Rabindra_Bharati": 130.0, "Bidhannagar": 143.0, "Jadavpur": 136.0, "Rabindra_Sarobar": 99.0, "Ballygunge": 121.0},
  {"month": "February", "monthIndex": 1, "day": 20, "Victoria": 143.0, "Fort_William": 141.0, "Rabindra_Bharati": 159.0, "Bidhannagar": 165.0, "Jadavpur": 159.0, "Rabindra_Sarobar": 116.0, "Ballygunge": 146.0},
  {"month": "February", "monthIndex": 1, "day": 21, "Victoria": 134.0, "Fort_William": 145.0, "Rabindra_Bharati": 145.0, "Bidhannagar": 143.0, "Jadavpur": 139.0, "Rabindra_Sarobar": 100.0, "Ballygunge": 136.0},
  {"month": "February", "monthIndex": 1, "day": 22, "Victoria": 128.0, "Fort_William": 134.0, "Rabindra_Bharati": 134.0, "Bidhannagar": 140.0, "Jadavpur": 132.0, "Rabindra_Sarobar": 87.0, "Ballygunge": 121.0},
  {"month": "February", "monthIndex": 1, "day": 23, "Victoria": 111.0, "Fort_William": 116.0, "Rabindra_Bharati": 112.0, "Bidhannagar": 107.0, "Jadavpur": 122.0, "Rabindra_Sarobar": 72.0, "Ballygunge": 102.0},
  {"month": "February", "monthIndex": 1, "day": 24, "Victoria": 128.0, "Fort_William": 123.0, "Rabindra_Bharati": 110.0, "Bidhannagar": 122.0, "Jadavpur": 143.0, "Rabindra_Sarobar": 102.0, "Ballygunge": 112.0},
  {"month": "February", "monthIndex": 1, "day": 25, "Victoria": 141.0, "Fort_William": 139.0, "Rabindra_Bharati": 115.0, "Bidhannagar": 133.0, "Jadavpur": 159.0, "Rabindra_Sarobar": 118.0, "Ballygunge": 124.0},
  {"month": "February", "monthIndex": 1, "day": 26, "Victoria": 161.0, "Fort_William": 160.0, "Rabindra_Bharati": 137.0, "Bidhannagar": 155.0, "Jadavpur": 178.0, "Rabindra_Sarobar": 138.0, "Ballygunge": 157.0},
  {"month": "February", "monthIndex": 1, "day": 27, "Victoria": 150.0, "Fort_William": 151.0, "Rabindra_Bharati": 115.0, "Bidhannagar": 127.0, "Jadavpur": 168.0, "Rabindra_Sarobar": 133.0, "Ballygunge": 150.0},
  {"month": "February", "monthIndex": 1, "day": 28, "Victoria": 144.0, "Fort_William": 148.0, "Rabindra_Bharati": 107.0, "Bidhannagar": 114.0, "Jadavpur": 167.0, "Rabindra_Sarobar": 118.0, "Ballygunge": 142.0},
  {"month": "February", "monthIndex": 1, "day": 29, "Victoria": 160.0, "Fort_William": 174.0, "Rabindra_Bharati": 137.0, "Bidhannagar": 145.0, "Jadavpur": 204.0, "Rabindra_Sarobar": 131.0, "Ballygunge": 175.0},
  {"month": "March", "monthIndex": 2, "day": 1, "Victoria": 135.0, "Fort_William": 138.0, "Rabindra_Bharati": 114.0, "Bidhannagar": null, "Jadavpur": 152.0, "Rabindra_Sarobar": 130.0, "Ballygunge": 136.0},
  {"month": "March", "monthIndex": 2, "day": 2, "Victoria": 144.0, "Fort_William": 180.0, "Rabindra_Bharati": 119.0, "Bidhannagar": 142.0, "Jadavpur": 145.0, "Rabindra_Sarobar": 120.0, "Ballygunge": 133.0},
  {"month": "March", "monthIndex": 2, "day": 3, "Victoria": 120.0, "Fort_William": 154.0, "Rabindra_Bharati": null, "Bidhannagar": 124.0, "Jadavpur": 104.0, "Rabindra_Sarobar": 97.0, "Ballygunge": 114.0},
  {"month": "March", "monthIndex": 2, "day": 4, "Victoria": 124.0, "Fort_William": 154.0, "Rabindra_Bharati": null, "Bidhannagar": 138.0, "Jadavpur": 113.0, "Rabindra_Sarobar": 95.0, "Ballygunge": 116.0},
  {"month": "March", "monthIndex": 2, "day": 5, "Victoria": null, "Fort_William": 100.0, "Rabindra_Bharati": 95.0, "Bidhannagar": 106.0, "Jadavpur": 97.0, "Rabindra_Sarobar": 80.0, "Ballygunge": 97.0},
  {"month": "March", "monthIndex": 2, "day": 6, "Victoria": null, "Fort_William": 116.0, "Rabindra_Bharati": 101.0, "Bidhannagar": 112.0, "Jadavpur": 108.0, "Rabindra_Sarobar": 89.0, "Ballygunge": 107.0},
  {"month": "March", "monthIndex": 2, "day": 7, "Victoria": null, "Fort_William": 130.0, "Rabindra_Bharati": 109.0, "Bidhannagar": 117.0, "Jadavpur": 121.0, "Rabindra_Sarobar": 90.0, "Ballygunge": 119.0},
  {"month": "March", "monthIndex": 2, "day": 8, "Victoria": null, "Fort_William": 147.0, "Rabindra_Bharati": 136.0, "Bidhannagar": null, "Jadavpur": 119.0, "Rabindra_Sarobar": 110.0, "Ballygunge": 135.0},
  {"month": "March", "monthIndex": 2, "day": 9, "Victoria": null, "Fort_William": 147.0, "Rabindra_Bharati": 128.0, "Bidhannagar": 122.0, "Jadavpur": 166.0, "Rabindra_Sarobar": 115.0, "Ballygunge": 126.0},
  {"month": "March", "monthIndex": 2, "day": 10, "Victoria": null, "Fort_William": 154.0, "Rabindra_Bharati": 118.0, "Bidhannagar": 147.0, "Jadavpur": 121.0, "Rabindra_Sarobar": 110.0, "Ballygunge": 157.0},
  {"month": "March", "monthIndex": 2, "day": 11, "Victoria": null, "Fort_William": 126.0, "Rabindra_Bharati": 96.0, "Bidhannagar": 144.0, "Jadavpur": 119.0, "Rabindra_Sarobar": 101.0, "Ballygunge": null},
  {"month": "March", "monthIndex": 2, "day": 12, "Victoria": 113.0, "Fort_William": 134.0, "Rabindra_Bharati": 108.0, "Bidhannagar": 122.0, "Jadavpur": 134.0, "Rabindra_Sarobar": 99.0, "Ballygunge": 104.0},
  {"month": "March", "monthIndex": 2, "day": 13, "Victoria": 120.0, "Fort_William": 123.0, "Rabindra_Bharati": 105.0, "Bidhannagar": 105.0, "Jadavpur": 133.0, "Rabindra_Sarobar": 107.0, "Ballygunge": 113.0},
  {"month": "March", "monthIndex": 2, "day": 14, "Victoria": 103.0, "Fort_William": 108.0, "Rabindra_Bharati": 89.0, "Bidhannagar": 96.0, "Jadavpur": 111.0, "Rabindra_Sarobar": 91.0, "Ballygunge": 95.0},
  {"month": "March", "monthIndex": 2, "day": 15, "Victoria": 94.0, "Fort_William": 100.0, "Rabindra_Bharati": 97.0, "Bidhannagar": 94.0, "Jadavpur": 115.0, "Rabindra_Sarobar": 96.0, "Ballygunge": 98.0},
  {"month": "March", "monthIndex": 2, "day": 16, "Victoria": 128.0, "Fort_William": 128.0, "Rabindra_Bharati": 100.0, "Bidhannagar": 104.0, "Jadavpur": 138.0, "Rabindra_Sarobar": 109.0, "Ballygunge": 120.0},
  {"month": "March", "monthIndex": 2, "day": 17, "Victoria": 108.0, "Fort_William": 121.0, "Rabindra_Bharati": 89.0, "Bidhannagar": 96.0, "Jadavpur": 118.0, "Rabindra_Sarobar": 89.0, "Ballygunge": 109.0},
  {"month": "March", "monthIndex": 2, "day": 18, "Victoria": 94.0, "Fort_William": 95.0, "Rabindra_Bharati": 78.0, "Bidhannagar": 88.0, "Jadavpur": 98.0, "Rabindra_Sarobar": 81.0, "Ballygunge": 93.0},
  {"month": "March", "monthIndex": 2, "day": 19, "Victoria": 100.0, "Fort_William": 93.0, "Rabindra_Bharati": 86.0, "Bidhannagar": 85.0, "Jadavpur": 97.0, "Rabindra_Sarobar": 72.0, "Ballygunge": 92.0},
  {"month": "March", "monthIndex": 2, "day": 20, "Victoria": 77.0, "Fort_William": 71.0, "Rabindra_Bharati": 61.0, "Bidhannagar": 69.0, "Jadavpur": 61.0, "Rabindra_Sarobar": 56.0, "Ballygunge": 68.0},
  {"month": "March", "monthIndex": 2, "day": 21, "Victoria": 75.0, "Fort_William": 70.0, "Rabindra_Bharati": 63.0, "Bidhannagar": 67.0, "Jadavpur": 81.0, "Rabindra_Sarobar": 63.0, "Ballygunge": 64.0},
  {"month": "March", "monthIndex": 2, "day": 22, "Victoria": 97.0, "Fort_William": 97.0, "Rabindra_Bharati": 90.0, "Bidhannagar": 92.0, "Jadavpur": 117.0, "Rabindra_Sarobar": 88.0, "Ballygunge": 98.0},
  {"month": "March", "monthIndex": 2, "day": 23, "Victoria": 106.0, "Fort_William": 108.0, "Rabindra_Bharati": 100.0, "Bidhannagar": 95.0, "Jadavpur": 114.0, "Rabindra_Sarobar": 94.0, "Ballygunge": 106.0},
  {"month": "March", "monthIndex": 2, "day": 24, "Victoria": 90.0, "Fort_William": 94.0, "Rabindra_Bharati": 81.0, "Bidhannagar": 84.0, "Jadavpur": 90.0, "Rabindra_Sarobar": 66.0, "Ballygunge": 82.0},
  {"month": "March", "monthIndex": 2, "day": 25, "Victoria": 85.0, "Fort_William": 83.0, "Rabindra_Bharati": 76.0, "Bidhannagar": 62.0, "Jadavpur": 69.0, "Rabindra_Sarobar": 62.0, "Ballygunge": 87.0},
  {"month": "March", "monthIndex": 2, "day": 26, "Victoria": 97.0, "Fort_William": 95.0, "Rabindra_Bharati": 82.0, "Bidhannagar": 92.0, "Jadavpur": 98.0, "Rabindra_Sarobar": 86.0, "Ballygunge": 95.0},
  {"month": "March", "monthIndex": 2, "day": 27, "Victoria": 116.0, "Fort_William": 102.0, "Rabindra_Bharati": 93.0, "Bidhannagar": 100.0, "Jadavpur": 124.0, "Rabindra_Sarobar": 97.0, "Ballygunge": 105.0},
  {"month": "March", "monthIndex": 2, "day": 28, "Victoria": 109.0, "Fort_William": 96.0, "Rabindra_Bharati": 95.0, "Bidhannagar": 102.0, "Jadavpur": 114.0, "Rabindra_Sarobar": 103.0, "Ballygunge": 99.0},
  {"month": "March", "monthIndex": 2, "day": 29, "Victoria": 139.0, "Fort_William": 136.0, "Rabindra_Bharati": 100.0, "Bidhannagar": 132.0, "Jadavpur": 133.0, "Rabindra_Sarobar": 105.0, "Ballygunge": 137.0},
  {"month": "March", "monthIndex": 2, "day": 30, "Victoria": 133.0, "Fort_William": 124.0, "Rabindra_Bharati": 91.0, "Bidhannagar": 116.0, "Jadavpur": 135.0, "Rabindra_Sarobar": 90.0, "Ballygunge": 128.0},
  {"month": "March", "monthIndex": 2, "day": 31, "Victoria": 130.0, "Fort_William": 104.0, "Rabindra_Bharati": 78.0, "Bidhannagar": 96.0, "Jadavpur": 110.0, "Rabindra_Sarobar": 97.0, "Ballygunge": 112.0},
  {"month": "April", "monthIndex": 3, "day": 1, "Victoria": 169.0, "Fort_William": 95.0, "Rabindra_Bharati": 81.0, "Bidhannagar": 169.0, "Jadavpur": 95.0, "Rabindra_Sarobar": 60.0, "Ballygunge": 74.0},
  {"month": "April", "monthIndex": 3, "day": 2, "Victoria": 155.0, "Fort_William": 142.0, "Rabindra_Bharati": 98.0, "Bidhannagar": 99.0, "Jadavpur": 92.0, "Rabindra_Sarobar": 61.0, "Ballygunge": 90.0},
  {"month": "April", "monthIndex": 3, "day": 3, "Victoria": 106.0, "Fort_William": 142.0, "Rabindra_Bharati": 92.0, "Bidhannagar": 99.0, "Jadavpur": 177.0, "Rabindra_Sarobar": 67.0, "Ballygunge": 97.0},
  {"month": "April", "monthIndex": 3, "day": 4, "Victoria": 86.0, "Fort_William": 85.0, "Rabindra_Bharati": 81.0, "Bidhannagar": 77.0, "Jadavpur": 85.0, "Rabindra_Sarobar": 61.0, "Ballygunge": 75.0},
  {"month": "April", "monthIndex": 3, "day": 5, "Victoria": 79.0, "Fort_William": 74.0, "Rabindra_Bharati": 67.0, "Bidhannagar": 69.0, "Jadavpur": 58.0, "Rabindra_Sarobar": 61.0, "Ballygunge": 69.0},
  {"month": "April", "monthIndex": 3, "day": 6, "Victoria": 111.0, "Fort_William": 107.0, "Rabindra_Bharati": 88.0, "Bidhannagar": 98.0, "Jadavpur": 88.0, "Rabindra_Sarobar": 70.0, "Ballygunge": 103.0},
  {"month": "April", "monthIndex": 3, "day": 7, "Victoria": 82.0, "Fort_William": 80.0, "Rabindra_Bharati": 71.0, "Bidhannagar": 69.0, "Jadavpur": 69.0, "Rabindra_Sarobar": 61.0, "Ballygunge": 70.0},
  {"month": "April", "monthIndex": 3, "day": 8, "Victoria": 85.0, "Fort_William": 85.0, "Rabindra_Bharati": 74.0, "Bidhannagar": 69.0, "Jadavpur": 66.0, "Rabindra_Sarobar": 61.0, "Ballygunge": 73.0},
  {"month": "April", "monthIndex": 3, "day": 9, "Victoria": 77.0, "Fort_William": 81.0, "Rabindra_Bharati": 79.0, "Bidhannagar": 80.0, "Jadavpur": 90.0, "Rabindra_Sarobar": 77.0, "Ballygunge": 77.0},
  {"month": "April", "monthIndex": 3, "day": 10, "Victoria": 126.0, "Fort_William": 126.0, "Rabindra_Bharati": 119.0, "Bidhannagar": 142.0, "Jadavpur": 103.0, "Rabindra_Sarobar": 99.0, "Ballygunge": 123.0},
  {"month": "April", "monthIndex": 3, "day": 11, "Victoria": 165.0, "Fort_William": 146.0, "Rabindra_Bharati": 129.0, "Bidhannagar": 182.0, "Jadavpur": 135.0, "Rabindra_Sarobar": 109.0, "Ballygunge": 167.0},
  {"month": "April", "monthIndex": 3, "day": 12, "Victoria": 89.0, "Fort_William": 95.0, "Rabindra_Bharati": 71.0, "Bidhannagar": 88.0, "Jadavpur": 81.0, "Rabindra_Sarobar": 76.0, "Ballygunge": 87.0},
  {"month": "April", "monthIndex": 3, "day": 13, "Victoria": 82.0, "Fort_William": 92.0, "Rabindra_Bharati": 74.0, "Bidhannagar": 81.0, "Jadavpur": 86.0, "Rabindra_Sarobar": 72.0, "Ballygunge": 87.0},
  {"month": "April", "monthIndex": 3, "day": 14, "Victoria": 84.0, "Fort_William": 89.0, "Rabindra_Bharati": 70.0, "Bidhannagar": 76.0, "Jadavpur": 86.0, "Rabindra_Sarobar": 71.0, "Ballygunge": 84.0},
  {"month": "April", "monthIndex": 3, "day": 15, "Victoria": 75.0, "Fort_William": 78.0, "Rabindra_Bharati": 65.0, "Bidhannagar": 67.0, "Jadavpur": 70.0, "Rabindra_Sarobar": 63.0, "Ballygunge": 74.0},
  {"month": "April", "monthIndex": 3, "day": 16, "Victoria": 75.0, "Fort_William": 83.0, "Rabindra_Bharati": 62.0, "Bidhannagar": 70.0, "Jadavpur": 81.0, "Rabindra_Sarobar": 59.0, "Ballygunge": 73.0},
  {"month": "April", "monthIndex": 3, "day": 17, "Victoria": 80.0, "Fort_William": 80.0, "Rabindra_Bharati": 73.0, "Bidhannagar": 74.0, "Jadavpur": 77.0, "Rabindra_Sarobar": 63.0, "Ballygunge": 71.0},
  {"month": "April", "monthIndex": 3, "day": 18, "Victoria": 80.0, "Fort_William": 87.0, "Rabindra_Bharati": 69.0, "Bidhannagar": 64.0, "Jadavpur": 72.0, "Rabindra_Sarobar": 66.0, "Ballygunge": 70.0},
  {"month": "April", "monthIndex": 3, "day": 19, "Victoria": 86.0, "Fort_William": 79.0, "Rabindra_Bharati": 68.0, "Bidhannagar": 64.0, "Jadavpur": 63.0, "Rabindra_Sarobar": 64.0, "Ballygunge": 70.0},
  {"month": "April", "monthIndex": 3, "day": 20, "Victoria": 83.0, "Fort_William": 81.0, "Rabindra_Bharati": 78.0, "Bidhannagar": 74.0, "Jadavpur": 81.0, "Rabindra_Sarobar": 70.0, "Ballygunge": 74.0},
  {"month": "April", "monthIndex": 3, "day": 21, "Victoria": 84.0, "Fort_William": 83.0, "Rabindra_Bharati": 85.0, "Bidhannagar": 69.0, "Jadavpur": 77.0, "Rabindra_Sarobar": 73.0, "Ballygunge": 79.0},
  {"month": "April", "monthIndex": 3, "day": 22, "Victoria": 81.0, "Fort_William": 78.0, "Rabindra_Bharati": 68.0, "Bidhannagar": 68.0, "Jadavpur": 69.0, "Rabindra_Sarobar": 63.0, "Ballygunge": 76.0},
  {"month": "April", "monthIndex": 3, "day": 23, "Victoria": 66.0, "Fort_William": 70.0, "Rabindra_Bharati": 61.0, "Bidhannagar": 61.0, "Jadavpur": 65.0, "Rabindra_Sarobar": 56.0, "Ballygunge": 62.0},
  {"month": "April", "monthIndex": 3, "day": 24, "Victoria": 75.0, "Fort_William": 78.0, "Rabindra_Bharati": 65.0, "Bidhannagar": 70.0, "Jadavpur": 65.0, "Rabindra_Sarobar": 56.0, "Ballygunge": 66.0},
  {"month": "April", "monthIndex": 3, "day": 25, "Victoria": 70.0, "Fort_William": 66.0, "Rabindra_Bharati": 63.0, "Bidhannagar": 63.0, "Jadavpur": 66.0, "Rabindra_Sarobar": 58.0, "Ballygunge": 59.0},
  {"month": "April", "monthIndex": 3, "day": 26, "Victoria": 67.0, "Fort_William": 63.0, "Rabindra_Bharati": 60.0, "Bidhannagar": 61.0, "Jadavpur": 64.0, "Rabindra_Sarobar": 54.0, "Ballygunge": 59.0},
  {"month": "April", "monthIndex": 3, "day": 27, "Victoria": 65.0, "Fort_William": 63.0, "Rabindra_Bharati": 61.0, "Bidhannagar": 64.0, "Jadavpur": 67.0, "Rabindra_Sarobar": 57.0, "Ballygunge": 54.0},
  {"month": "April", "monthIndex": 3, "day": 28, "Victoria": 59.0, "Fort_William": 61.0, "Rabindra_Bharati": 59.0, "Bidhannagar": 55.0, "Jadavpur": 62.0, "Rabindra_Sarobar": 51.0, "Ballygunge": 48.0},
  {"month": "April", "monthIndex": 3, "day": 29, "Victoria": 62.0, "Fort_William": 63.0, "Rabindra_Bharati": 59.0, "Bidhannagar": 58.0, "Jadavpur": 63.0, "Rabindra_Sarobar": 54.0, "Ballygunge": 53.0},
  {"month": "April", "monthIndex": 3, "day": 30, "Victoria": 91.0, "Fort_William": 108.0, "Rabindra_Bharati": 89.0, "Bidhannagar": 77.0, "Jadavpur": 115.0, "Rabindra_Sarobar": 70.0, "Ballygunge": 91.0},
  {"month": "May", "monthIndex": 4, "day": 1, "Victoria": 101.0, "Fort_William": 161.0, "Rabindra_Bharati": 220.0, "Bidhannagar": 100.0, "Jadavpur": 188.0, "Rabindra_Sarobar": 163.0, "Ballygunge": 115.0},
  {"month": "May", "monthIndex": 4, "day": 2, "Victoria": 87.0, "Fort_William": 92.0, "Rabindra_Bharati": 78.0, "Bidhannagar": 90.0, "Jadavpur": 92.0, "Rabindra_Sarobar": 79.0, "Ballygunge": 110.0},
  {"month": "May", "monthIndex": 4, "day": 3, "Victoria": 91.0, "Fort_William": 102.0, "Rabindra_Bharati": 100.0, "Bidhannagar": 80.0, "Jadavpur": 86.0, "Rabindra_Sarobar": 82.0, "Ballygunge": 99.0},
  {"month": "May", "monthIndex": 4, "day": 4, "Victoria": 85.0, "Fort_William": 86.0, "Rabindra_Bharati": 113.0, "Bidhannagar": 79.0, "Jadavpur": 70.0, "Rabindra_Sarobar": 79.0, "Ballygunge": 76.0},
  {"month": "May", "monthIndex": 4, "day": 5, "Victoria": 62.0, "Fort_William": 63.0, "Rabindra_Bharati": 99.0, "Bidhannagar": 56.0, "Jadavpur": 48.0, "Rabindra_Sarobar": 63.0, "Ballygunge": 56.0},
  {"month": "May", "monthIndex": 4, "day": 6, "Victoria": 63.0, "Fort_William": 65.0, "Rabindra_Bharati": 137.0, "Bidhannagar": 55.0, "Jadavpur": 54.0, "Rabindra_Sarobar": 61.0, "Ballygunge": 56.0},
  {"month": "May", "monthIndex": 4, "day": 7, "Victoria": 48.0, "Fort_William": 64.0, "Rabindra_Bharati": 36.0, "Bidhannagar": 52.0, "Jadavpur": 65.0, "Rabindra_Sarobar": 56.0, "Ballygunge": 70.0},
  {"month": "May", "monthIndex": 4, "day": 8, "Victoria": 42.0, "Fort_William": 52.0, "Rabindra_Bharati": 35.0, "Bidhannagar": 51.0, "Jadavpur": 52.0, "Rabindra_Sarobar": 46.0, "Ballygunge": 61.0},
  {"month": "May", "monthIndex": 4, "day": 9, "Victoria": 39.0, "Fort_William": 40.0, "Rabindra_Bharati": 28.0, "Bidhannagar": 43.0, "Jadavpur": 40.0, "Rabindra_Sarobar": 46.0, "Ballygunge": 52.0},
  {"month": "May", "monthIndex": 4, "day": 10, "Victoria": 53.0, "Fort_William": 52.0, "Rabindra_Bharati": 36.0, "Bidhannagar": 50.0, "Jadavpur": 51.0, "Rabindra_Sarobar": 47.0, "Ballygunge": 60.0},
  {"month": "May", "monthIndex": 4, "day": 11, "Victoria": 43.0, "Fort_William": 42.0, "Rabindra_Bharati": 40.0, "Bidhannagar": 38.0, "Jadavpur": 52.0, "Rabindra_Sarobar": 45.0, "Ballygunge": 39.0},
  {"month": "May", "monthIndex": 4, "day": 12, "Victoria": 59.0, "Fort_William": 42.0, "Rabindra_Bharati": 48.0, "Bidhannagar": 58.0, "Jadavpur": 47.0, "Rabindra_Sarobar": 56.0, "Ballygunge": 61.0},
  {"month": "May", "monthIndex": 4, "day": 13, "Victoria": 64.0, "Fort_William": 55.0, "Rabindra_Bharati": 46.0, "Bidhannagar": 71.0, "Jadavpur": 52.0, "Rabindra_Sarobar": 63.0, "Ballygunge": 68.0},
  {"month": "May", "monthIndex": 4, "day": 14, "Victoria": 65.0, "Fort_William": 50.0, "Rabindra_Bharati": 37.0, "Bidhannagar": 64.0, "Jadavpur": 55.0, "Rabindra_Sarobar": 61.0, "Ballygunge": 71.0},
  {"month": "May", "monthIndex": 4, "day": 15, "Victoria": 78.0, "Fort_William": 78.0, "Rabindra_Bharati": 89.0, "Bidhannagar": 67.0, "Jadavpur": 60.0, "Rabindra_Sarobar": 69.0, "Ballygunge": 79.0},
  {"month": "May", "monthIndex": 4, "day": 16, "Victoria": 66.0, "Fort_William": 66.0, "Rabindra_Bharati": 63.0, "Bidhannagar": 70.0, "Jadavpur": 65.0, "Rabindra_Sarobar": 65.0, "Ballygunge": 74.0},
  {"month": "May", "monthIndex": 4, "day": 17, "Victoria": 70.0, "Fort_William": 67.0, "Rabindra_Bharati": 79.0, "Bidhannagar": 54.0, "Jadavpur": 54.0, "Rabindra_Sarobar": 66.0, "Ballygunge": 71.0},
  {"month": "May", "monthIndex": 4, "day": 18, "Victoria": 72.0, "Fort_William": 68.0, "Rabindra_Bharati": 69.0, "Bidhannagar": 49.0, "Jadavpur": 62.0, "Rabindra_Sarobar": 62.0, "Ballygunge": 67.0},
  {"month": "May", "monthIndex": 4, "day": 19, "Victoria": 65.0, "Fort_William": 54.0, "Rabindra_Bharati": 60.0, "Bidhannagar": 60.0, "Jadavpur": 61.0, "Rabindra_Sarobar": 60.0, "Ballygunge": 62.0},
  {"month": "May", "monthIndex": 4, "day": 20, "Victoria": 62.0, "Fort_William": 57.0, "Rabindra_Bharati": 60.0, "Bidhannagar": 55.0, "Jadavpur": 55.0, "Rabindra_Sarobar": 60.0, "Ballygunge": 52.0},
  {"month": "May", "monthIndex": 4, "day": 21, "Victoria": 64.0, "Fort_William": 54.0, "Rabindra_Bharati": 66.0, "Bidhannagar": 54.0, "Jadavpur": 56.0, "Rabindra_Sarobar": 56.0, "Ballygunge": 59.0},
  {"month": "May", "monthIndex": 4, "day": 22, "Victoria": 68.0, "Fort_William": 56.0, "Rabindra_Bharati": 78.0, "Bidhannagar": 57.0, "Jadavpur": 63.0, "Rabindra_Sarobar": 60.0, "Ballygunge": 66.0},
  {"month": "May", "monthIndex": 4, "day": 23, "Victoria": 61.0, "Fort_William": 55.0, "Rabindra_Bharati": 58.0, "Bidhannagar": 42.0, "Jadavpur": 49.0, "Rabindra_Sarobar": 52.0, "Ballygunge": 58.0},
  {"month": "May", "monthIndex": 4, "day": 24, "Victoria": 50.0, "Fort_William": 48.0, "Rabindra_Bharati": 53.0, "Bidhannagar": 44.0, "Jadavpur": 47.0, "Rabindra_Sarobar": 45.0, "Ballygunge": 52.0},
  {"month": "May", "monthIndex": 4, "day": 25, "Victoria": 47.0, "Fort_William": 45.0, "Rabindra_Bharati": 47.0, "Bidhannagar": 40.0, "Jadavpur": 45.0, "Rabindra_Sarobar": 41.0, "Ballygunge": 51.0},
  {"month": "May", "monthIndex": 4, "day": 26, "Victoria": 27.0, "Fort_William": 33.0, "Rabindra_Bharati": 25.0, "Bidhannagar": 28.0, "Jadavpur": 27.0, "Rabindra_Sarobar": 25.0, "Ballygunge": 28.0},
  {"month": "May", "monthIndex": 4, "day": 27, "Victoria": 31.0, "Fort_William": 46.0, "Rabindra_Bharati": 37.0, "Bidhannagar": 35.0, "Jadavpur": 30.0, "Rabindra_Sarobar": 24.0, "Ballygunge": 37.0},
  {"month": "May", "monthIndex": 4, "day": 28, "Victoria": 36.0, "Fort_William": 48.0, "Rabindra_Bharati": 33.0, "Bidhannagar": 31.0, "Jadavpur": 31.0, "Rabindra_Sarobar": 25.0, "Ballygunge": 41.0},
  {"month": "May", "monthIndex": 4, "day": 29, "Victoria": 37.0, "Fort_William": 58.0, "Rabindra_Bharati": 32.0, "Bidhannagar": 41.0, "Jadavpur": 31.0, "Rabindra_Sarobar": 28.0, "Ballygunge": 51.0},
  {"month": "May", "monthIndex": 4, "day": 30, "Victoria": 66.0, "Fort_William": 77.0, "Rabindra_Bharati": 55.0, "Bidhannagar": 60.0, "Jadavpur": 51.0, "Rabindra_Sarobar": 46.0, "Ballygunge": 62.0},
  {"month": "May", "monthIndex": 4, "day": 31, "Victoria": 67.0, "Fort_William": 71.0, "Rabindra_Bharati": 51.0, "Bidhannagar": 48.0, "Jadavpur": 47.0, "Rabindra_Sarobar": 47.0, "Ballygunge": 54.0},
  {"month": "June", "monthIndex": 5, "day": 1, "Victoria": 68.0, "Fort_William": 65.0, "Rabindra_Bharati": 53.0, "Bidhannagar": 51.0, "Jadavpur": 60.0, "Rabindra_Sarobar": 43.0, "Ballygunge": 53.0},
  {"month": "June", "monthIndex": 5, "day": 2, "Victoria": 61.0, "Fort_William": 60.0, "Rabindra_Bharati": null, "Bidhannagar": null, "Jadavpur": 52.0, "Rabindra_Sarobar": 41.0, "Ballygunge": 49.0},
  {"month": "June", "monthIndex": 5, "day": 3, "Victoria": 57.0, "Fort_William": 57.0, "Rabindra_Bharati": 112.0, "Bidhannagar": 52.0, "Jadavpur": 56.0, "Rabindra_Sarobar": 41.0, "Ballygunge": 66.0},
  {"month": "June", "monthIndex": 5, "day": 4, "Victoria": 48.0, "Fort_William": 58.0, "Rabindra_Bharati": 95.0, "Bidhannagar": 56.0, "Jadavpur": 58.0, "Rabindra_Sarobar": 51.0, "Ballygunge": 54.0},
  {"month": "June", "monthIndex": 5, "day": 5, "Victoria": 56.0, "Fort_William": 66.0, "Rabindra_Bharati": 81.0, "Bidhannagar": 63.0, "Jadavpur": 83.0, "Rabindra_Sarobar": 57.0, "Ballygunge": 73.0},
  {"month": "June", "monthIndex": 5, "day": 6, "Victoria": 54.0, "Fort_William": 76.0, "Rabindra_Bharati": 128.0, "Bidhannagar": 67.0, "Jadavpur": 78.0, "Rabindra_Sarobar": 61.0, "Ballygunge": 70.0},
  {"month": "June", "monthIndex": 5, "day": 7, "Victoria": 55.0, "Fort_William": 90.0, "Rabindra_Bharati": 79.0, "Bidhannagar": 78.0, "Jadavpur": 67.0, "Rabindra_Sarobar": 61.0, "Ballygunge": 67.0},
  {"month": "June", "monthIndex": 5, "day": 8, "Victoria": 63.0, "Fort_William": 71.0, "Rabindra_Bharati": 66.0, "Bidhannagar": 63.0, "Jadavpur": 52.0, "Rabindra_Sarobar": 56.0, "Ballygunge": 55.0},
  {"month": "June", "monthIndex": 5, "day": 9, "Victoria": 60.0, "Fort_William": 66.0, "Rabindra_Bharati": 65.0, "Bidhannagar": 64.0, "Jadavpur": 65.0, "Rabindra_Sarobar": 58.0, "Ballygunge": 61.0},
  {"month": "June", "monthIndex": 5, "day": 10, "Victoria": 57.0, "Fort_William": 70.0, "Rabindra_Bharati": 62.0, "Bidhannagar": 66.0, "Jadavpur": 66.0, "Rabindra_Sarobar": 56.0, "Ballygunge": 62.0},
  {"month": "June", "monthIndex": 5, "day": 11, "Victoria": 56.0, "Fort_William": null, "Rabindra_Bharati": 50.0, "Bidhannagar": 56.0, "Jadavpur": 45.0, "Rabindra_Sarobar": 48.0, "Ballygunge": 49.0},
  {"month": "June", "monthIndex": 5, "day": 12, "Victoria": 63.0, "Fort_William": 66.0, "Rabindra_Bharati": 51.0, "Bidhannagar": 63.0, "Jadavpur": 58.0, "Rabindra_Sarobar": 46.0, "Ballygunge": 51.0},
  {"month": "June", "monthIndex": 5, "day": 13, "Victoria": 52.0, "Fort_William": 62.0, "Rabindra_Bharati": 58.0, "Bidhannagar": 54.0, "Jadavpur": 47.0, "Rabindra_Sarobar": 44.0, "Ballygunge": 54.0},
  {"month": "June", "monthIndex": 5, "day": 14, "Victoria": 48.0, "Fort_William": 61.0, "Rabindra_Bharati": 63.0, "Bidhannagar": 51.0, "Jadavpur": 54.0, "Rabindra_Sarobar": 47.0, "Ballygunge": 46.0},
  {"month": "June", "monthIndex": 5, "day": 15, "Victoria": 49.0, "Fort_William": 66.0, "Rabindra_Bharati": 60.0, "Bidhannagar": 52.0, "Jadavpur": 56.0, "Rabindra_Sarobar": 55.0, "Ballygunge": 56.0},
  {"month": "June", "monthIndex": 5, "day": 16, "Victoria": 48.0, "Fort_William": 61.0, "Rabindra_Bharati": 50.0, "Bidhannagar": 56.0, "Jadavpur": 44.0, "Rabindra_Sarobar": 42.0, "Ballygunge": 52.0},
  {"month": "June", "monthIndex": 5, "day": 17, "Victoria": 43.0, "Fort_William": 52.0, "Rabindra_Bharati": 43.0, "Bidhannagar": 48.0, "Jadavpur": 37.0, "Rabindra_Sarobar": 35.0, "Ballygunge": 46.0},
  {"month": "June", "monthIndex": 5, "day": 18, "Victoria": 42.0, "Fort_William": 45.0, "Rabindra_Bharati": 43.0, "Bidhannagar": 49.0, "Jadavpur": 39.0, "Rabindra_Sarobar": 39.0, "Ballygunge": 44.0},
  {"month": "June", "monthIndex": 5, "day": 19, "Victoria": 45.0, "Fort_William": 48.0, "Rabindra_Bharati": 43.0, "Bidhannagar": 52.0, "Jadavpur": 37.0, "Rabindra_Sarobar": 40.0, "Ballygunge": 49.0},
  {"month": "June", "monthIndex": 5, "day": 20, "Victoria": 34.0, "Fort_William": 36.0, "Rabindra_Bharati": 37.0, "Bidhannagar": 39.0, "Jadavpur": 35.0, "Rabindra_Sarobar": 31.0, "Ballygunge": 36.0},
  {"month": "June", "monthIndex": 5, "day": 21, "Victoria": 41.0, "Fort_William": 45.0, "Rabindra_Bharati": 36.0, "Bidhannagar": 46.0, "Jadavpur": 36.0, "Rabindra_Sarobar": 37.0, "Ballygunge": 47.0},
  {"month": "June", "monthIndex": 5, "day": 22, "Victoria": 41.0, "Fort_William": 46.0, "Rabindra_Bharati": 40.0, "Bidhannagar": 43.0, "Jadavpur": 37.0, "Rabindra_Sarobar": 36.0, "Ballygunge": 42.0},
  {"month": "June", "monthIndex": 5, "day": 23, "Victoria": 42.0, "Fort_William": 48.0, "Rabindra_Bharati": 39.0, "Bidhannagar": 38.0, "Jadavpur": 38.0, "Rabindra_Sarobar": 34.0, "Ballygunge": 46.0},
  {"month": "June", "monthIndex": 5, "day": 24, "Victoria": 47.0, "Fort_William": 48.0, "Rabindra_Bharati": 53.0, "Bidhannagar": 53.0, "Jadavpur": 35.0, "Rabindra_Sarobar": 39.0, "Ballygunge": 46.0},
  {"month": "June", "monthIndex": 5, "day": 25, "Victoria": 42.0, "Fort_William": 45.0, "Rabindra_Bharati": 41.0, "Bidhannagar": 47.0, "Jadavpur": 36.0, "Rabindra_Sarobar": 35.0, "Ballygunge": 43.0},
  {"month": "June", "monthIndex": 5, "day": 26, "Victoria": 45.0, "Fort_William": 45.0, "Rabindra_Bharati": 40.0, "Bidhannagar": 49.0, "Jadavpur": 39.0, "Rabindra_Sarobar": 33.0, "Ballygunge": 46.0},
  {"month": "June", "monthIndex": 5, "day": 27, "Victoria": 40.0, "Fort_William": 40.0, "Rabindra_Bharati": 34.0, "Bidhannagar": 40.0, "Jadavpur": 36.0, "Rabindra_Sarobar": 32.0, "Ballygunge": 37.0},
  {"month": "June", "monthIndex": 5, "day": 28, "Victoria": 30.0, "Fort_William": 28.0, "Rabindra_Bharati": 28.0, "Bidhannagar": 32.0, "Jadavpur": 27.0, "Rabindra_Sarobar": 25.0, "Ballygunge": 32.0},
  {"month": "June", "monthIndex": 5, "day": 29, "Victoria": 31.0, "Fort_William": 33.0, "Rabindra_Bharati": 34.0, "Bidhannagar": 33.0, "Jadavpur": 28.0, "Rabindra_Sarobar": 24.0, "Ballygunge": 30.0},
  {"month": "June", "monthIndex": 5, "day": 30, "Victoria": 66.0, "Fort_William": 52.0, "Rabindra_Bharati": 45.0, "Bidhannagar": 55.0, "Jadavpur": 35.0, "Rabindra_Sarobar": 36.0, "Ballygunge": 46.0},
];

// --- CONSTANTS ---
const STATIONS = [
  { key: "Victoria", name: "Victoria", color: "#E63946" },
  { key: "Fort_William", name: "Fort William", color: "#2A9D8F" },
  { key: "Rabindra_Bharati", name: "Rabindra Bharati", color: "#457B9D" },
  { key: "Bidhannagar", name: "Bidhannagar", color: "#F4A261" },
  { key: "Jadavpur", name: "Jadavpur", color: "#9B5DE5" },
  { key: "Rabindra_Sarobar", name: "Rabindra Sarobar", color: "#00BBF9" },
  { key: "Ballygunge", name: "Ballygunge", color: "#FB8500" }
];

const MONTHS = [
  "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"
];

// Indian National AQI Bands (NAAQS)
// Source: CPCB (Central Pollution Control Board)
const AQI_BANDS = [
  { y1: 0, y2: 50, label: "Good", color: "rgba(0, 153, 102, 0.1)" },         // Green
  { y1: 50, y2: 100, label: "Satisfactory", color: "rgba(255, 222, 51, 0.1)" }, // Yellow
  { y1: 100, y2: 200, label: "Moderate", color: "rgba(255, 153, 51, 0.1)" },    // Orange
  { y1: 200, y2: 300, label: "Poor", color: "rgba(204, 0, 51, 0.1)" },          // Red
  { y1: 300, y2: 400, label: "Very Poor", color: "rgba(102, 0, 153, 0.1)" },    // Purple
  { y1: 400, y2: 600, label: "Severe", color: "rgba(126, 0, 35, 0.1)" },        // Maroon
];

// --- COMPONENTS ---

// 1. Overall Chart Component
const OverallChart = ({ data }) => {
  return (
    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center gap-2 mb-4">
        <BarChart3 className="w-5 h-5 text-gray-500" />
        <h2 className="text-lg font-serif font-bold text-gray-800">Annual Comparative Overview</h2>
      </div>
      <div className="h-[500px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            
            {/* Background Reference Areas for AQI Categories */}
            {AQI_BANDS.map((band, index) => (
              <ReferenceArea 
                key={index} 
                y1={band.y1} 
                y2={band.y2} 
                fill={band.color} 
                strokeOpacity={0}
              />
            ))}

            <XAxis 
              dataKey="month" 
              tickFormatter={(value, index) => index % 30 === 0 ? value : ''} 
              stroke="#888888" 
              fontSize={12}
            />
            <YAxis stroke="#888888" fontSize={12} label={{ value: 'AQI', angle: -90, position: 'insideLeft' }} />
            <Tooltip 
              contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', borderRadius: '8px', border: '1px solid #eee', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              labelStyle={{ fontWeight: 'bold', color: '#333', fontFamily: 'serif' }}
              labelFormatter={(label, payload) => {
                if (payload && payload.length > 0) {
                  const { day, month } = payload[0].payload;
                  return `${month} ${day}, 2024`;
                }
                return label;
              }}
            />
            <Legend verticalAlign="top" height={36} iconType="circle" />
            {STATIONS.map(station => (
              <Line 
                key={station.key}
                type="monotone" 
                dataKey={station.key} 
                name={station.name}
                stroke={station.color} 
                strokeWidth={1.5}
                dot={false}
                activeDot={{ r: 6 }}
                // connectNulls removed to show gaps for missing data
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-xs text-gray-500 flex flex-col gap-2 font-sans">
        <div className="flex items-start gap-2">
          <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <p>
            <strong>Data Gaps:</strong> Gaps in the lines indicate missing data from the source station for that specific day. No interpolation is applied to ensure statistical accuracy.
          </p>
        </div>
        <div className="flex items-start gap-2">
          <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <p>
            <strong>Benchmarks:</strong> Shaded background bands represent standard AQI categories (Good, Satisfactory, Moderate, Poor, Very Poor, Severe) as per the National Ambient Air Quality Standards (NAAQS), India.
          </p>
        </div>
      </div>
    </div>
  );
};

// 2. Small Month Card Component
const MonthCard = ({ monthIndex, data }) => {
  const monthName = MONTHS[monthIndex];
  
  // Calculate days in month for 2024 (leap year)
  // monthIndex is 0-11. The Date constructor takes (year, monthIndex + 1, 0) to get the last day of the month.
  const daysInMonth = new Date(2024, monthIndex + 1, 0).getDate();
  
  // Filter data for this specific month
  const monthlyData = useMemo(() => {
    return data.filter(d => d.monthIndex === monthIndex);
  }, [data, monthIndex]);

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col h-[300px]">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-serif font-bold text-gray-700">{monthName}</h3>
        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full font-sans">{daysInMonth} Days</span>
      </div>
      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f5" />
            
             {/* Background Reference Areas */}
             {AQI_BANDS.map((band, index) => (
              <ReferenceArea 
                key={index} 
                y1={band.y1} 
                y2={band.y2} 
                fill={band.color} 
                strokeOpacity={0}
              />
            ))}

            <XAxis dataKey="day" stroke="#cccccc" fontSize={10} tickCount={5} />
            <YAxis stroke="#cccccc" fontSize={10} width={30} />
            <Tooltip 
              contentStyle={{ fontSize: '12px', padding: '8px', fontFamily: 'serif' }}
              labelFormatter={(day) => `${monthName} ${day}`}
            />
            {STATIONS.map(station => (
              <Line 
                key={station.key}
                type="monotone" 
                dataKey={station.key} 
                stroke={station.color} 
                strokeWidth={1}
                dot={false}
                // connectNulls removed here as well
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// 3. Parliament Dashboard Component
const ParliamentDashboard = () => {
  const [selectedQ, setSelectedQ] = useState(parliamentData[0]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[800px]">
      {/* Left Column: List of Questions */}
      <div className="lg:col-span-4 flex flex-col bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden h-full">
        <div className="p-4 border-b border-gray-100 bg-orange-50">
          <h2 className="font-serif font-bold text-gray-900 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-orange-600" />
            Parliamentary Agenda
          </h2>
          <p className="text-xs text-gray-500 mt-1">Select a member to view Q&A</p>
        </div>
        <div className="flex-1 overflow-y-auto p-2 space-y-2">
          {parliamentData.map((item) => (
            <div 
              key={item.id}
              onClick={() => setSelectedQ(item)}
              className={`p-3 rounded-lg cursor-pointer transition-all border ${
                selectedQ.id === item.id 
                  ? 'bg-orange-50 border-orange-200 shadow-sm' 
                  : 'bg-white border-transparent hover:bg-gray-50 hover:border-gray-100'
              }`}
            >
              <div className="flex justify-between items-start mb-1">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{item.date}</span>
                <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded border border-gray-200">
                  Q.{item.id}
                </span>
              </div>
              <h3 className={`text-sm font-semibold mb-1 ${selectedQ.id === item.id ? 'text-orange-900' : 'text-gray-800'}`}>
                {item.subject}
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <User className="w-3 h-3" />
                <span className="truncate">{item.member}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Detailed Q&A */}
      <div className="lg:col-span-8 flex flex-col bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden h-full">
        <div className="p-6 border-b border-gray-100 bg-white sticky top-0 z-10">
          <div className="flex items-center gap-2 mb-2 text-xs font-medium text-orange-600 uppercase tracking-wider">
            <Building2 className="w-3 h-3" />
            LOK SABHA • {selectedQ.type} QUESTION NO. {selectedQ.id}
          </div>
          <h2 className="text-2xl font-serif font-bold text-gray-900 leading-tight mb-2">
            {selectedQ.subject}
          </h2>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              <span className="font-medium text-gray-900">{selectedQ.member}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{selectedQ.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              <span>Ministry: {selectedQ.ministry}</span>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-gray-50/50">
          {/* Question Section */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative">
            <div className="absolute -left-3 top-6 bg-blue-600 text-white p-1.5 rounded-r-lg shadow-sm">
              <Info className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3 ml-2">Question Raised</h3>
            <p className="text-gray-800 leading-relaxed text-base ml-2">
              {selectedQ.question}
            </p>
          </div>

          {/* Answer Section */}
          <div className="bg-white p-6 rounded-xl border border-orange-200 shadow-sm relative">
            <div className="absolute -left-3 top-6 bg-green-600 text-white p-1.5 rounded-r-lg shadow-sm">
              <MessageCircle className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3 ml-2">Government Response</h3>
            <p className="text-gray-800 leading-relaxed text-base ml-2">
              {selectedQ.answer}
            </p>
          </div>
          
          <div className="flex justify-end pt-4">
             <button className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-medium px-4 py-2 hover:bg-blue-50 rounded-lg transition-colors">
               <FileText className="w-4 h-4" />
               Download Official PDF Record
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP COMPONENT ---
function App() {
  const [activeTab, setActiveTab] = useState('air-pollution');
  const [activeYear, setActiveYear] = useState('2024');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderContent = () => {
    if (activeTab === 'air-pollution') {
      if (activeYear === '2024') {
        return (
          <div className="space-y-12">
            {/* Section 1: Annual Overview */}
            <section>
              <OverallChart data={rawData} />
            </section>

            {/* Section 2: Monthly Breakdown Grid */}
            <section>
              <div className="flex items-center gap-2 mb-6 border-b border-gray-200 pb-2">
                <Calendar className="w-5 h-5 text-gray-500" />
                <h2 className="text-xl font-serif font-bold text-gray-800">Monthly Breakdown</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {MONTHS.map((_, index) => (
                  <MonthCard key={index} monthIndex={index} data={rawData} />
                ))}
              </div>
            </section>

            {/* Section 3: AQI Categories Information & Metadata */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* AQI Info Box */}
                <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 lg:col-span-2">
                <div className="flex items-start gap-3">
                    <Info className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                    <h2 className="text-lg font-serif font-bold text-gray-800 mb-2">India: Safe Limit for AQI</h2>
                    <p className="text-gray-600 mb-4 font-sans leading-relaxed text-sm">
                        In India, air quality is regulated under the <strong>National Ambient Air Quality Standards</strong> issued by the <strong>Central Pollution Control Board</strong>. 
                        India uses the <strong>National Air Quality Index</strong> system.
                    </p>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                        {AQI_BANDS.map((band, index) => (
                        <div key={index} className="p-2 rounded-lg border border-gray-100" style={{ backgroundColor: band.color }}>
                            <div className="font-bold text-gray-900 text-xs">{band.label}</div>
                            <div className="text-[10px] text-gray-600 mt-1">
                            {band.y1} - {band.y2 === 600 ? '500' : band.y2}
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>
                </div>
                </section>

                {/* Data Source & Metadata Box (Only shown here) */}
                <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 lg:col-span-1">
                    <h3 className="text-sm font-bold text-gray-900 mb-3 font-serif">Data & Credits</h3>
                    <div className="space-y-3 text-xs text-gray-600 font-sans">
                        <p>
                            <span className="font-semibold text-gray-700">Data Source:</span><br/>
                            Central Control Room for Air Quality Management - All India
                        </p>
                        <p>
                            <span className="font-semibold text-gray-700">AQI Standards:</span><br/>
                            <a href="https://cpcb.nic.in/National-Air-Quality-Index/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                                National Ambient Air Quality Standards (CPCB, India)
                            </a>
                        </p>
                        <div className="pt-2 border-t border-gray-200 mt-2">
                            <p className="italic text-gray-500">
                                Generated visualization based on 7 monitoring station datasets in Kolkata. Missing data points are intentionally left as gaps.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
          </div>
        );
      } else {
        return (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-xl border border-gray-100 shadow-sm">
            <Info className="w-12 h-12 text-gray-300 mb-4" />
            <h3 className="text-lg font-medium text-gray-900">Data for 2025 is not yet available</h3>
            <p className="text-gray-500 mt-2">Please check back later for updates.</p>
          </div>
        );
      }
    } else if (activeTab === 'heat-wave') {
      return (
        <div className="space-y-8">
            <div className="mb-6">
                <h1 className="text-3xl font-serif font-bold text-gray-900">How Is Indian Parliament Responding to the Heatwave?</h1>
                <p className="text-gray-600 mt-2 max-w-3xl">
                  An interactive archive of parliamentary questions and government responses regarding heatwaves, climate change, and mitigation strategies.
                </p>
            </div>
            
            <ParliamentDashboard />

            {/* Placeholder for future charts */}
            <div className="flex flex-col items-center justify-center py-12 bg-white rounded-xl border border-gray-100 shadow-sm border-dashed">
                <Sun className="w-10 h-10 text-orange-200 mb-3" />
                <h3 className="text-base font-medium text-gray-500">Visual Data Analysis Coming Soon</h3>
            </div>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] font-sans text-gray-900 flex flex-col">
      
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between h-16">
            <div className="flex items-center gap-8">
              {/* Logo / Brand */}
              <div className="flex-shrink-0 flex items-center gap-2">
                <div className="bg-black text-white p-1.5 rounded">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-serif font-bold text-xl tracking-tight">Kolkata Civic Data</span>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8">
                <button
                  onClick={() => setActiveTab('air-pollution')}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    activeTab === 'air-pollution'
                      ? 'border-blue-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  <Wind className="w-4 h-4 mr-2" />
                  Air Pollution
                </button>
                <button
                  onClick={() => setActiveTab('heat-wave')}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    activeTab === 'heat-wave'
                      ? 'border-orange-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  <Sun className="w-4 h-4 mr-2" />
                  Heat Wave
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                {isMobileMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="pt-2 pb-3 space-y-1">
              <button
                onClick={() => { setActiveTab('air-pollution'); setIsMobileMenuOpen(false); }}
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium w-full text-left ${
                  activeTab === 'air-pollution'
                    ? 'bg-blue-50 border-blue-500 text-blue-700'
                    : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                Air Pollution
              </button>
              <button
                onClick={() => { setActiveTab('heat-wave'); setIsMobileMenuOpen(false); }}
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium w-full text-left ${
                  activeTab === 'heat-wave'
                    ? 'bg-orange-50 border-orange-500 text-orange-700'
                    : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                Heat Wave
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 py-8 w-full">
        
        {/* Page Header & Year Tabs (Only for Air Pollution) */}
        {activeTab === 'air-pollution' && (
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
              <div>
                <h1 className="text-3xl font-serif font-bold text-gray-900">What Government Monitoring Data Tells Us About Air Pollution in Kolkata?</h1>
                <p className="text-gray-600 mt-2 max-w-3xl">
                  Analyze daily air quality trends across monitoring stations to understand the impact of pollutants on public health.
                </p>
              </div>
              
              {/* Year Tabs */}
              <div className="flex bg-gray-100 p-1 rounded-lg self-start sm:self-end">
                <button
                  onClick={() => setActiveYear('2025')}
                  className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${
                    activeYear === '2025'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  2025
                </button>
                <button
                  onClick={() => setActiveYear('2024')}
                  className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${
                    activeYear === '2024'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  2024
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Content Render */}
        {renderContent()}

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <p className="text-xs text-gray-400 font-sans max-w-2xl mx-auto">
            Kolkata Civic Data Project • Hosted on GitHub
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
