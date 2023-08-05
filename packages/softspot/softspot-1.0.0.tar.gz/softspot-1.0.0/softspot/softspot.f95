module softspot_module
   implicit none
contains


subroutine sum_zij_squared(pair_lookup, z, ndim, npart, pair_count, res)
  implicit none
!***************************************************************************************************
! comment:
!***************************************************************************************************
  integer,intent(in)                                 :: ndim,npart,pair_count
  integer,dimension(0:pair_count-1, 0:1), intent(in)     :: pair_lookup
  real(8),dimension(0:ndim*npart-1), intent(in)      :: z
  real(8),intent(out)                                :: res

  integer                      :: i,j,l
  real(8), dimension(0:ndim-1) :: zij

  res = 0.

  do l = 0 , pair_count - 1
    i = pair_lookup(l, 0)
    j = pair_lookup(l, 1)

    zij(:) = z(ndim*j:ndim*j+1) - z(ndim*i:ndim*i+1)
    res = res + dot_product(zij(:), zij(:))**2.
  end do 

end subroutine sum_zij_squared



subroutine sum_zij_squared_grad(pair_lookup, z, ndim, npart, pair_count, grad)
  implicit none
!***************************************************************************************************
! comment:
!***************************************************************************************************
  integer,intent(in)                                 :: ndim,npart,pair_count
  integer,dimension(0:pair_count-1, 0:1), intent(in)        :: pair_lookup
  real(8), dimension(0:ndim*npart-1), intent(in)     :: z
  real(8), dimension(0:ndim*npart-1), intent(out)    :: grad

  integer                      :: i,j,l
  real(8), dimension(0:ndim-1) :: zij
  real(8)                      :: zij_dot_zij

  grad(:) = 0.

  do l = 0 , pair_count - 1
    i = pair_lookup(l, 0)
    j = pair_lookup(l, 1)

    zij(:) = z(ndim*j:ndim*j+1) - z(ndim*i:ndim*i+1)
    zij_dot_zij = dot_product(zij(:), zij(:))

    grad(ndim*j:ndim*(j+1)) = grad(ndim*j:ndim*(j+1)) + 4. * zij_dot_zij * zij(:)
    grad(ndim*i:ndim*(i+1)) = grad(ndim*i:ndim*(i+1)) - 4. * zij_dot_zij * zij(:)
  end do

end subroutine sum_zij_squared_grad

end module
