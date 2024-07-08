import express from 'express';

// Convenience function to return the DisplayName of the User
export function UserDisplayName(req: Express.Request): String
{
    if (req.user)
    {
        let user = req.user as UserDocument
        return user.DisplayName.toString();
    }

    return '';
}

// Create helper function for guarding secure locations
export function AuthGuard(req: express.Request, res: express.Response, next: express.NextFunction);
