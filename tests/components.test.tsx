import { describe, expect, it } from 'vitest';
import { invitation } from '../src/config/invitation';
import { calculateCountdown } from '../src/lib/countdown';
describe('Arabic wedding configuration', () => {
 it('uses the confirmed Cairo instant and only the confirmed schedule', () => {
  expect(invitation.groomName).toBe('احمد'); expect(invitation.brideName).toBe('الاء');
  expect(new Date(invitation.weddingDate).toISOString()).toBe('2026-10-22T18:00:00.000Z');
  expect(new Intl.DateTimeFormat('en-GB',{timeZone:'Africa/Cairo',hour:'2-digit',hour12:false}).format(new Date(invitation.weddingDate))).toBe('21');
  expect(calculateCountdown(invitation.weddingDate,new Date('2026-10-22T17:59:59Z')).seconds).toBe(1);
  expect(calculateCountdown(invitation.weddingDate,new Date('2026-10-22T18:00:00Z')).complete).toBe(true);
  expect(invitation.schedule).toHaveLength(1); expect(invitation.endDate).toBe('');
 });
 it('uses the supplied photos and exact venue coordinates', () => {
  expect(invitation.gallery).toHaveLength(2);
  expect(invitation.venue.directionsUrl).toContain('30.6357971%2C31.5591093');
  expect(invitation.guestNotes.enabled).toBe(true);
 });
});
