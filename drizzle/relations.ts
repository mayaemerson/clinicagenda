import { relations } from "drizzle-orm/relations";
import { users, session, clinics, patients, doctors, usersToClinics, appointments } from "./schema";

export const sessionRelations = relations(session, ({one}) => ({
	user: one(users, {
		fields: [session.userId],
		references: [users.id]
	}),
}));

export const usersRelations = relations(users, ({many}) => ({
	sessions: many(session),
}));

export const patientsRelations = relations(patients, ({one, many}) => ({
	clinic: one(clinics, {
		fields: [patients.clinicId],
		references: [clinics.id]
	}),
	appointments: many(appointments),
}));

export const clinicsRelations = relations(clinics, ({many}) => ({
	patients: many(patients),
	doctors: many(doctors),
	usersToClinics: many(usersToClinics),
	appointments: many(appointments),
}));

export const doctorsRelations = relations(doctors, ({one, many}) => ({
	clinic: one(clinics, {
		fields: [doctors.clinicId],
		references: [clinics.id]
	}),
	appointments: many(appointments),
}));

export const usersToClinicsRelations = relations(usersToClinics, ({one}) => ({
	clinic: one(clinics, {
		fields: [usersToClinics.clinicId],
		references: [clinics.id]
	}),
}));

export const appointmentsRelations = relations(appointments, ({one}) => ({
	clinic: one(clinics, {
		fields: [appointments.clinicId],
		references: [clinics.id]
	}),
	patient: one(patients, {
		fields: [appointments.patientId],
		references: [patients.id]
	}),
	doctor: one(doctors, {
		fields: [appointments.doctorId],
		references: [doctors.id]
	}),
}));