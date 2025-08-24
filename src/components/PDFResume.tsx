import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// PDF Styles - matching your dark theme
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#000000',
    color: '#E5E7EB',
    padding: 30,
    fontFamily: 'Helvetica'
  },
  header: {
    borderBottom: '2 solid #374151',
    paddingBottom: 15,
    marginBottom: 20
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F9FAFB',
    marginBottom: 5,
    textTransform: 'uppercase',
    letterSpacing: 2
  },
  role: {
    fontSize: 12,
    backgroundColor: '#5DC22D',
    color: '#000000',
    padding: '4 12',
    borderRadius: 3,
    alignSelf: 'flex-start',
    fontWeight: 'bold'
  },
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    fontSize: 10,
    color: '#9CA3AF'
  },
  education: {
    backgroundColor: '#111827',
    padding: 12,
    borderRadius: 4,
    marginTop: 10
  },
  educationTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#F9FAFB'
  },
  educationDetails: {
    fontSize: 10,
    color: '#9CA3AF',
    marginTop: 2
  },
  cgpa: {
    backgroundColor: '#5DC22D',
    color: '#000000',
    fontSize: 8,
    padding: '2 6',
    borderRadius: 2,
    fontWeight: 'bold',
    alignSelf: 'flex-end'
  },
  section: {
    marginBottom: 15
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5DC22D',
    borderBottom: '1 solid #374151',
    paddingBottom: 5,
    marginBottom: 10,
    textTransform: 'uppercase'
  },
  skillsContainer: {
    backgroundColor: '#111827',
    padding: 12,
    borderRadius: 4
  },
  skillCategory: {
    marginBottom: 8
  },
  skillCategoryTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#5DC22D',
    marginBottom: 3
  },
  skillText: {
    fontSize: 9,
    color: '#D1D5DB',
    lineHeight: 1.4
  },
  experienceItem: {
    backgroundColor: '#111827',
    padding: 12,
    borderRadius: 4,
    marginBottom: 10
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  companyName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#F9FAFB'
  },
  period: {
    fontSize: 10,
    color: '#5DC22D'
  },
  position: {
    fontSize: 10,
    color: '#D1D5DB',
    marginBottom: 3
  },
  location: {
    fontSize: 9,
    color: '#9CA3AF',
    marginBottom: 8
  },
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 3
  },
  bullet: {
    color: '#5DC22D',
    marginRight: 5,
    fontSize: 8,
    marginTop: 1
  },
  bulletText: {
    fontSize: 8,
    color: '#9CA3AF',
    lineHeight: 1.3,
    flex: 1
  },
  projectItem: {
    backgroundColor: '#111827',
    padding: 12,
    borderRadius: 4,
    marginBottom: 10
  },
  projectTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#F9FAFB',
    marginBottom: 5
  },
  technologies: {
    fontSize: 8,
    color: '#5DC22D',
    backgroundColor: '#000000',
    padding: '2 6',
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 8
  },
  achievementGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10
  },
  achievementItem: {
    backgroundColor: '#111827',
    padding: 10,
    borderRadius: 4,
    flex: '1 1 45%',
    minWidth: '45%'
  },
  achievementTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#F9FAFB',
    marginBottom: 3
  },
  achievementDate: {
    fontSize: 8,
    color: '#5DC22D',
    backgroundColor: '#000000',
    padding: '1 4',
    borderRadius: 2,
    alignSelf: 'flex-end',
    marginBottom: 5
  },
  achievementText: {
    fontSize: 8,
    color: '#9CA3AF',
    lineHeight: 1.3
  }
});

export const PDFResume: React.FC = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.name}>SURAJ SINGH</Text>
        <View style={styles.role}>
          <Text>SDET APPLICATION</Text>
        </View>
        
        <View style={styles.contactRow}>
          <Text>+91 8766039312</Text>
          <Text>hotmailsuraj@gmail.com</Text>
          <Text>Hyderabad, India</Text>
        </View>
        
        <View style={styles.contactRow}>
          <Text>linkedin.com/in/s0oraj</Text>
          <Text>github.com/s0oraj</Text>
          <Text>leetcode.com/s0oraj</Text>
        </View>

        {/* Education */}
        <View style={styles.education}>
          <View style={[styles.experienceHeader, { alignItems: 'flex-start' }]}>
            <View>
              <Text style={styles.educationTitle}>C.V. Raman Global University</Text>
              <Text style={styles.educationDetails}>B.Tech in CS & IT</Text>
              <Text style={styles.educationDetails}>Bhubaneshwar, Odisha</Text>
            </View>
            <View>
              <Text style={[styles.period, { marginBottom: 3 }]}>06/2024</Text>
              <View style={styles.cgpa}>
                <Text>CGPA: 8.5</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Technical Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Skills</Text>
        <View style={styles.skillsContainer}>
          <View style={styles.skillCategory}>
            <Text style={styles.skillCategoryTitle}>Backend & Data Technologies:</Text>
            <Text style={styles.skillText}>Spring, Java, Python, Android Development, PostgreSQL, PySpark, SQL, Hive</Text>
          </View>
          <View style={styles.skillCategory}>
            <Text style={styles.skillCategoryTitle}>Frontend Development:</Text>
            <Text style={styles.skillText}>React.js, Three.js, Framer Motion 3D, Jetpack Compose, Javascript, XML</Text>
          </View>
          <View style={styles.skillCategory}>
            <Text style={styles.skillCategoryTitle}>Developer Tools:</Text>
            <Text style={styles.skillText}>Visual Studio Code, Android Studio, Docker, Postman, Git, Maven, IntelliJ IDEA</Text>
          </View>
        </View>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        
        {/* Wipro */}
        <View style={styles.experienceItem}>
          <View style={styles.experienceHeader}>
            <Text style={styles.companyName}>Wipro Technologies</Text>
            <Text style={styles.period}>03/2025 - Present</Text>
          </View>
          <Text style={styles.position}>Data Engineer L2 - Top 4 BFSI Client</Text>
          <Text style={styles.location}>Hyderabad</Text>
          
          <View style={styles.bulletPoint}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Building distributed systems for processing multi-terabyte datasets through Genesis DataMart, handling data flows from PP files through NGL/DRI processes to holding layers</Text>
          </View>
          <View style={styles.bulletPoint}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Optimizing PySpark Directed Acyclic Graph (DAG) execution using topological sorting algorithms for SUBGL processes and backfeed mechanisms with STR/SRU adjustment components</Text>
          </View>
          <View style={styles.bulletPoint}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Implementing SQL/Hive partitioning strategies for banking data across dual holding layers and BSS file processing</Text>
          </View>
        </View>

        {/* Roboslog */}
        <View style={styles.experienceItem}>
          <View style={styles.experienceHeader}>
            <Text style={styles.companyName}>Roboslog Pvt Ltd</Text>
            <Text style={styles.period}>06/2022 - 08/2022</Text>
          </View>
          <Text style={styles.position}>Software Developer Intern (Java)</Text>
          <Text style={styles.location}>Delhi, NCR</Text>
          
          <View style={styles.bulletPoint}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Developed Agent-Driver Android apps with Firebase Cloud Messaging for live order notifications and MapBox location tracking for real-time delivery monitoring</Text>
          </View>
          <View style={styles.bulletPoint}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Designed and implemented REST API integration using Retrofit for authentication and data management</Text>
          </View>
        </View>
      </View>

      {/* Projects */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projects</Text>
        
        <View style={styles.projectItem}>
          <Text style={styles.projectTitle}>Advanced Coding Interview Patterns (ACIP)</Text>
          <Text style={styles.technologies}>React, Vite, Three.js, Framer-motion-3D, Zustand</Text>
          
          <View style={styles.bulletPoint}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Built GPU-accelerated 3D galaxy UI with Solar systems as individual Coding Roadmaps, 500K stars at 60 FPS, optimizing vertices with Three.js buffers and Level of Detail (LOD) mesh optimization</Text>
          </View>
          <View style={styles.bulletPoint}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Algorithm Pattern Engine: Implemented 51 interactive step-by-step UX visualizations for each algorithm pattern, demonstrating code execution through synchronized animations using framer-motion</Text>
          </View>
        </View>

        <View style={styles.projectItem}>
          <Text style={styles.projectTitle}>ACIP Backend - Pattern Tracker</Text>
          <Text style={styles.technologies}>Spring Boot, OAuth2, PostgreSQL, JPA/Hibernate, Maven</Text>
          
          <View style={styles.bulletPoint}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Built Spring Boot REST API with Google OAuth2 and JWT authentication for secure user sessions</Text>
          </View>
          <View style={styles.bulletPoint}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Designed PostgreSQL database schema with JPA/Hibernate ORM and optimized query performance</Text>
          </View>
        </View>
      </View>

      {/* Achievements */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Achievements</Text>
        <View style={styles.achievementGrid}>
          <View style={styles.achievementItem}>
            <View style={styles.experienceHeader}>
              <Text style={styles.achievementTitle}>IIT Kanpur Research Internship Offer</Text>
              <Text style={styles.achievementDate}>01/2024</Text>
            </View>
            <Text style={styles.achievementText}>Offered a Research internship by Prof. Tushar Sandhan from IIT Kanpur to work on Image segmentation of the heart for 3D heart model generation.</Text>
          </View>
          
          <View style={styles.achievementItem}>
            <View style={styles.experienceHeader}>
              <Text style={styles.achievementTitle}>Coding & Competitive Exams</Text>
              <Text style={styles.achievementDate}>05/2024</Text>
            </View>
            <Text style={styles.achievementText}>Ranked Top 9.53% of all contestants on LeetCode with a contest rating of 1755. Ranked AIR 688 out of 25,000+ candidates (Top 2.752%) in C-DAC Common Admission Test 2025.</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);
