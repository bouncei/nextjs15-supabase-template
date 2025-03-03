import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next();

  // Initialize Supabase server client
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Fetch the authenticated user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  /**
   * Authentication Handling
   *
   * - Redirect unauthenticated users trying to access private pages to the login page.
   * - Redirect authenticated users away from authentication pages.
   */

  // Replace with your own authentication logic
  const isPrivateRoute = !request.nextUrl.pathname.startsWith("/dashboard"); // Modify this
  const isAuthRoute = request.nextUrl.pathname.startsWith("/auth"); // Modify this

  if (!user && isPrivateRoute) {
    // Redirect to login page if user is not authenticated
    const url = new URL("/sign-in", request.url); // Modify this
    url.searchParams.set("next", request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  if (user && isAuthRoute) {
    // Redirect authenticated users away from authentication pages
    return NextResponse.redirect(new URL("/", request.url));
  }

  /**
   * Role-Based Access Control (Optional)
   *
   * - Redirect users based on their role.
   * - Modify this logic to match your application's user roles.
   */

  if (user) {
    // Redirect authenticated users to dashboard
    return NextResponse.redirect(new URL("/dashboard", request.url)); // MODIFY THIS
  }

  // Return the updated response with session cookies
  return response;
}
