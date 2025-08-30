📌 Project Overview

This project demonstrates a Supabase database design and a minimal Next.js frontend for managing users, events, and RSVPs. Users can register, create events, and RSVP to events.

🔧 Part 1 — Database Design
Database Schema

The database consists of three main tables:

Users

id (UUID, Primary Key)

name (TEXT, not null)

email (TEXT, unique, not null)

created_at (TIMESTAMP, default now())

Events

id (UUID, Primary Key)

title (TEXT, not null)

description (TEXT)

date (TIMESTAMP, not null)

city (TEXT)

created_by (UUID, Foreign Key → Users.id, ON DELETE CASCADE)

RSVPs

id (UUID, Primary Key)

user_id (UUID, Foreign Key → Users.id, ON DELETE CASCADE)

event_id (UUID, Foreign Key → Events.id, ON DELETE CASCADE)

status (TEXT, constraint: 'Yes' | 'No' | 'Maybe')

Unique constraint on (user_id, event_id) to prevent duplicate RSVPs

Design Choices

Referential Integrity: Deleting a user or event cascades to RSVPs to maintain consistency.

Normalization: Each entity has its own table; relationships use foreign keys.

Constraints:

Unique emails for users

One RSVP per user per event

Status limited to 'Yes', 'No', or 'Maybe'

Sample Data

Users: 10 sample users

Events: 5 sample events, each linked to a creator

RSVPs: 20 sample RSVPs distributed across users and events

Deliverables

SQL dump of the schema

Database screenshots showing all tables

ER diagram screenshot

🚀 Part 2 — Minimal Next.js App (Bonus)
Features

Events Listing Page: Displays all upcoming events from the Events table.

RSVP Page: Allows users to RSVP (Yes/No/Maybe) for a specific event.

Supabase Integration: Uses @supabase/supabase-js to fetch and insert data.

Deployment: Live on Vercel connected to Supabase backend.
