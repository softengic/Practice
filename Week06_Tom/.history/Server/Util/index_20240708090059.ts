import express from 'express';

// Convenience function to return the DisplayName of the User
export function UserDisplayName(req: Express.Request): String
{
    if (req.user)
    {
        let user = req.user as UserDocument
        return user.DisplayName.toString();
    }
}