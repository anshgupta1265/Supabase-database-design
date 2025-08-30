Project Overview

This project demonstrates a Supabase database design and a minimal Next.js frontend for managing users, events, and RSVPs. Users can register, create events, and RSVP to events.

Part 1 — Database Design
Database Schema

Users Table

id (UUID, Primary Key)

name (TEXT, not null)

email (TEXT, unique, not null)

created_at (TIMESTAMP, default now())

Events Table

id (UUID, Primary Key)

title (TEXT, not null)

description (TEXT)

date (TIMESTAMP, not null)

city (TEXT)

created_by (UUID, Foreign Key → Users.id, ON DELETE CASCADE)

RSVPs Table

id (UUID, Primary Key)

user_id (UUID, Foreign Key → Users.id, ON DELETE CASCADE)

event_id (UUID, Foreign Key → Events.id, ON DELETE CASCADE)

status (TEXT, constraint: 'Yes' | 'No' | 'Maybe')

Unique constraint on (user_id, event_id) to prevent duplicate RSVPs

Design Choices

Referential Integrity: Deleting a user or event cascades to RSVPs.

Normalization: Separate tables for each entity.

Constraints:

Unique emails for users

One RSVP per user per event

Status limited to 'Yes', 'No', or 'Maybe'

Sample Data

Users: 10 sample users

Events: 5 sample events linked to creators

RSVPs: 20 sample RSVPs across users and events

Deliverables

SQL dump of schema

Database screenshots

ER diagram screenshot

Part 2 — Minimal Next.js App (Bonus)
Features

Events Listing Page: Shows all upcoming events from the Events table.

RSVP Page: Allows users to RSVP (Yes/No/Maybe) for events.

Supabase Integration: Uses @supabase/supabase-js to fetch and insert data.

Deployment: Live on Vercel connected to Supabase.
