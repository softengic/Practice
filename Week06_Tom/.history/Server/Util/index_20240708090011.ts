import express from 'express';

// Convenience function to return the displayName of the User
export function UserDisplayName(req: Express.Request): string
{
    if (req.user)
    {
        let user = req.user as UserDocument
        return user.DisplayName.toString();
    }
}